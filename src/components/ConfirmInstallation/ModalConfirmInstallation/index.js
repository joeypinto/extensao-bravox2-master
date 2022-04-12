import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faUpload } from '@fortawesome/free-solid-svg-icons'
import ModalContainer from 'containers/ModalContainer'
import { ConfirmInstallationContext } from 'contexts/confirmInstallationsContext'
import { GlobalContext } from 'contexts/globalContext'
import { useContext, useEffect, useState } from 'react'
import * as Styles from './styles'
import { STATUS_LIST } from 'constants/globals'
import { convertInArray } from 'utils'
import { useDebouncedCallback } from 'use-debounce'
import { serverPath } from './../../../utils/index';
import { useRouter } from 'next/router';

const ModalConfirmInstallation = () => {
  const ctxGlobal = useContext(GlobalContext)
  const ctxConfirm = useContext(ConfirmInstallationContext)
  const [status, setStatus] = useState('')
  const [images, setImages] = useState([])
  const [description, setDescription] = useState('')
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [durationInstallation, setDurationInstallation] = useState(0)
  const router = useRouter()
  useEffect(() => {
    setStatus(ctxConfirm.orderSelected.status)
  }, [ctxConfirm.orderSelected.status])

  useEffect(() => {
    setImages([])
  }, [ctxGlobal.isToggleModal])

  const resetAllState = () => {
    setImages([])
    setDescription('')
    setHours(0)
    setMinutes(0)
    setDurationInstallation(0)
  }

  const closeModal = () => {
    resetAllState()
    ctxGlobal.toggleModalContainer('init')
    ctxConfirm.setOrderCurrency({}, 'reset')
  }

  const setDebounceValue = useDebouncedCallback((value, set, type = 'h') => {
    if (!value) {
      set('')
    } else if (value < 0 || value === NaN || value === undefined || !value) {
      set('')
    } else {
      //Valida se é referente a horas
      if (type === 'h') {
        value > 23 ? set(0) : set(value)

        //Valida se é referente a minutos
      } else if (type === 'm') {
        value > 59 ? set(0) : set(value)
      } else {
        set(value)
      }
    }
  }, 300)

  const previewImageForUpload = (e) => {
    setImages(e.target.files)
  }

  const saveUpdateOrdersComplete = async () => {
    var order = ctxConfirm.orderSelected
    order["descriptionComplet"] = description
    order["status"] = status
    order["durationInstallation"] = durationInstallation
    order["hours"] = hours
    order["minutes"] = minutes
    await fetch(`${serverPath}/api/maintenance`, {method: 'POST',body:JSON.stringify({order:order}),headers: new Headers({'Content-Type': 'application/json'})});
    router.reload()
    
  }

  return (
    <ModalContainer
      isOpen={ctxGlobal.isToggleModal === 'confirmedInstallation' && true}
    >
      {ctxGlobal.isToggleModal === 'confirmedInstallation' && (
        <Styles.ModalConfirmInstallationWrapper role="document">
          <Styles.ModalHeader>
            <Styles.MotalTitle>Conclusão de Instalação</Styles.MotalTitle>
            <Styles.ModalButtonClose
              type="button"
              onClick={() => closeModal()}
              aria-labelledby="Ícone de fechar modal"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </Styles.ModalButtonClose>
          </Styles.ModalHeader>
          <Styles.ModalBody action="#" enctype="multipart/form-data">
            <Styles.modalInfoList>
              <Styles.modalInfoListitem>
                <Styles.TextNormal>
                  <Styles.TextBold>Nome: </Styles.TextBold>{' '}
                  {ctxConfirm.orderSelected.name_client}
                </Styles.TextNormal>
              </Styles.modalInfoListitem>
              <Styles.modalInfoListitem>
                <Styles.TextNormal>
                  <Styles.TextBold>ID Pedido: </Styles.TextBold>
                  {String(ctxConfirm.orderSelected.idTray).padStart(7, '0')}
                </Styles.TextNormal>
              </Styles.modalInfoListitem>
              <Styles.modalInfoListitem>
                <Styles.ModalFormContent className="row">
                  <Styles.ModalFormLabel htmlFor="selectModalStatus">
                    Status
                  </Styles.ModalFormLabel>
                  <Styles.ModalFormSelect
                    value={status}
                    id="selectModalStatus"
                    onChange={(e) => {
                      setStatus(e.target.value)
                    }}
                    className={status && status}
                  >
                    {STATUS_LIST.map((status) => {
                      return (
                        <option
                          key={`optionModal#${status.id}`}
                          value={status.value}
                        >
                          {status.label}
                        </option>
                      )
                    })}
                  </Styles.ModalFormSelect>
                </Styles.ModalFormContent>
              </Styles.modalInfoListitem>
            </Styles.modalInfoList>
            <Styles.ModalFormContent className="row full">
              <Styles.ModalFormContent className="half">
                <Styles.ModalFormLabel htmlFor="modalTime">
                  Hora do Atendimento
                </Styles.ModalFormLabel>
                <Styles.ModalFormInputBase>
                  <Styles.ModalInputTime
                    type="number"
                    id="modalTime"
                    defaultValue={hours}
                    max="23"
                    min="0"
                    className="borderRight"
                    onChange={(e) => {
                      setDebounceValue(parseInt(e.target.value), setHours)
                    }}
                  ></Styles.ModalInputTime>
                  <Styles.ModalFormInputBaseDivisor>
                    :
                  </Styles.ModalFormInputBaseDivisor>
                  <Styles.ModalInputTime
                    type="number"
                    id="modalTimeminutes"
                    defaultValue={minutes}
                    max="59"
                    min="0"
                    className="borderLeft"
                    onChange={(e) => {
                      setDebounceValue(
                        parseInt(e.target.value),
                        setMinutes,
                        'm'
                      )
                    }}
                  ></Styles.ModalInputTime>
                </Styles.ModalFormInputBase>
                <Styles.ModalFormInputSpan>
                  Digite as horas e os minutos
                </Styles.ModalFormInputSpan>
              </Styles.ModalFormContent>
              <Styles.ModalFormContent className="half">
                <Styles.ModalFormLabel htmlFor="modalDuration">
                  Duração da Instalação
                </Styles.ModalFormLabel>
                <Styles.ModalFormInput
                  type="text"
                  id="modalDuration"
                  defaultValue={durationInstallation}
                  onChange={(e) => {
                    setDebounceValue(
                      parseInt(e.target.value),
                      setDurationInstallation,
                      'd'
                    )
                  }}
                ></Styles.ModalFormInput>
                <Styles.ModalFormInputSpan>
                  Digite a duração em minutos
                </Styles.ModalFormInputSpan>
              </Styles.ModalFormContent>
            </Styles.ModalFormContent>

            <Styles.ModalFormContent className="full top-2">
              <Styles.ModalFormLabel htmlFor="modalImage">
                Imagens do serviço
              </Styles.ModalFormLabel>

              <Styles.ModalFormContent className="row full-start">
                <Styles.ModalImagesList>
                  {convertInArray(images).length > 0 &&
                    convertInArray(images).map((image, index) => {
                      return (
                        <Styles.ModalImageItem key={`listItem#${index}`}>
                          <Styles.ImageService
                            src={URL.createObjectURL(image)}
                            alt="imagem do serviço prestado"
                          />
                        </Styles.ModalImageItem>
                      )
                    })}
                </Styles.ModalImagesList>
                <Styles.ModalSelectImages>
                  <input
                    type="file"
                    name="listPhotos"
                    id="listPhotos"
                    multiple
                    onChange={(e) => {
                      previewImageForUpload(e)
                    }}
                  />
                  <Styles.ModalImageIcon>
                    <FontAwesomeIcon icon={faUpload} size="2x" />
                  </Styles.ModalImageIcon>
                  <Styles.ModalImageIconTitle>
                    Escolha o <br /> arquivo
                  </Styles.ModalImageIconTitle>
                </Styles.ModalSelectImages>
              </Styles.ModalFormContent>
            </Styles.ModalFormContent>
            <Styles.ModalFormContent className="full noGap">
              <Styles.ModalFormLabel htmlFor="modalDuration">
                Descrição do Serviço
              </Styles.ModalFormLabel>
              <Styles.ModalTextarea
                defaultValue={description}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
              ></Styles.ModalTextarea>
            </Styles.ModalFormContent>
            <Styles.ModalFormContent className="full row center top-2">
              <Styles.ModalButton
                type="button"
                onClick={() => {
                  saveUpdateOrdersComplete()}}
              >
                Salvar
              </Styles.ModalButton>
            </Styles.ModalFormContent>
          </Styles.ModalBody>
        </Styles.ModalConfirmInstallationWrapper>
      )}
    </ModalContainer>
  )
}

export default ModalConfirmInstallation

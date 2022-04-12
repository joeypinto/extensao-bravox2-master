import { useContext, useRef, useEffect } from 'react'
import { faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { themeDefault } from 'themes/themeDefault'
import { MapContext } from 'contexts/mapContext'
import { GlobalContext } from 'contexts/globalContext'
import * as Styles from './styles'
import { formatedDateShow } from 'utils'

const TecnicalAssistentItem = ({ assistent }) => {
  const theme = themeDefault

  const ctxGlobal = useContext(GlobalContext)
  const context = useContext(MapContext)
  const FiltersContext = context.filtersAndTecnicals

  let refList = useRef(null)

  useEffect(() => {
    FiltersContext.assistentsTecnicaslSelected === assistent.ID &&
      refList.current.focus()
  }, [FiltersContext.assistentsTecnicaslSelected])
  return (
    <Styles.ListTecnicalsItem
      ref={refList}
      className={
        FiltersContext.assistentsTecnicaslSelected === assistent.ID &&
        'is__selected'
      }
      tabIndex="-1"
    >
      <Styles.ListTecnicalItemHeader
        onClick={() => {
          FiltersContext.setTecnicalSelect(assistent.ID)
        }}
      >
        <h3>{assistent.NOME}</h3>
      </Styles.ListTecnicalItemHeader>
      <Styles.ListTecnicalItemContent>
        <Styles.ListTecnicalItemInfo>
          <Styles.ListTecnicalItemInfoText>
            Responsável:
            <Styles.ListTecnicalItemInfoTextSpan>
              {` ${assistent.CONTATO}`}
            </Styles.ListTecnicalItemInfoTextSpan>
          </Styles.ListTecnicalItemInfoText>
          <Styles.ListTecnicalItemInfoTextAddress>
            {assistent.ENDERECO}. {assistent.MUNICIPIO} - {assistent.ESTADO}
            {assistent.distance ? ` ${assistent.distance.toFixed(2)}km.` : '.'}
          </Styles.ListTecnicalItemInfoTextAddress>
          <Styles.ListTecnicalItemInfoTextSuccess>
            Agenda disponível próxima: <br />
            <time>
            {assistent.calenderTecnical[0] ? formatedDateShow(assistent.calenderTecnical[0].dateCalender) : ""}
            </time>
            {assistent.calenderTecnical[0] ? " - " + assistent.calenderTecnical[0].periods[0].period  : "- Tarde"}
          </Styles.ListTecnicalItemInfoTextSuccess>
          <Styles.TecnicalItemInfoReviewContent>
            <Styles.TecnicalItemInfoReviewText>
              Avaliação ({assistent.reviews_total}):{' '}
              <strong>
                {
                assistent.reviews_total == 0 ? " 0 " : String((assistent.reviews_avarage / assistent.reviews_total).toFixed(1)).replace('.', ',')
                }
              </strong>
            </Styles.TecnicalItemInfoReviewText>
            <Styles.TecnicalItemInfoReviewIcons>
              {Array(5)
                .fill()
                .map((element, index) => {
                  if (index + 1 <= (assistent.reviews_avarage / assistent.reviews_total)) {
                    return (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        color={theme.colors.primary}
                        size="lg"
                      />
                    )
                  } else {
                    return (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        color={theme.colors.grays.dark}
                        size="lg"
                      />
                    )
                  }
                })}
            </Styles.TecnicalItemInfoReviewIcons>
          </Styles.TecnicalItemInfoReviewContent>
        </Styles.ListTecnicalItemInfo>
        <Styles.ListTecnicalItemButtonContent>
          <Styles.ListTecnicalItemButton
            onClick={() => {
              if (FiltersContext.assistentsTecnicaslSelected !== assistent.ID) {
                FiltersContext.setTecnicalSelect(assistent.ID)
              }
              ctxGlobal.toggleModalContainer('tecnical')
              FiltersContext.openDialogConfirmed()
            }}
          >
            AGENDAR
            <FontAwesomeIcon icon={faChevronRight} />
          </Styles.ListTecnicalItemButton>
        </Styles.ListTecnicalItemButtonContent>
      </Styles.ListTecnicalItemContent>
    </Styles.ListTecnicalsItem>
  )
}

export default TecnicalAssistentItem

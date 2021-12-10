import Menu from 'components/Menu'

const MenuTechnical = ({ pageCurrency }) => {
  return (
    <Menu
      titleMenu="Oficinas Credenciadas"
      linksMenu={[
        {
          link: `/oficinas-credenciadas/agenda-recorrente`,
          slug: 'RecurringScheduleTecnical',
          label: 'Agenda recorrente'
        },
        {
          link: `/oficinas-credenciadas/manutencao-da-agenda`,
          slug: 'MaintenanceTechnicalSchedule',
          label: 'Manutenção da agenda recorrente'
        },
        {
          link: `/oficinas-credenciadas/manutencao-da-agenda-instalacoes`,
          slug: 'MaintenanceInstallationContainer',
          label: 'Manutenção da agenda de instalações'
        },
        {
          link: `/oficinas-credenciadas/consulta-instalacao`,
          slug: 'ConsultInstallationSuccess',
          label: 'Avaliações'
        },
        {
          link: `/oficinas-credenciadas/confirmar-instalacao`,
          slug: 'ConfirmInstallation',
          label: 'Confirmar Instalações'
        }
      ]}
      pageCurrency={pageCurrency}
    />
  )
}

export default MenuTechnical

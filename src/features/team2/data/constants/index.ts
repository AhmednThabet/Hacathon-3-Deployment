export const columns = [
  {
    key: 'itemName',
    header: 'Name',
    paddingLeft:20,
    width:150
  },
  {
    key: 'updatedAt',
    header: 'Date',
    width:100
  },
  {
    key: 'price',
    header: 'Amount'
  },
  {
    key: 'client',
    header: 'Client'
  },
  {
    key: 'status',
    header: 'Status',
  },
  
]

export const taps = [
  {key:'all', tap:'All'},
  {key:'invoice', tap:'Invoices'},
  {key:'service', tap:'Links'},
  
]
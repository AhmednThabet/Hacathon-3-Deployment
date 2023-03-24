export const columns = [
  {
    key: 'itemName',
    header: 'Name',
    paddingLeft:20,
    width:220
  },
  {
    key: 'updatedAt',
    header: 'Date',
    width:100
  },
  {
    key: 'subTotal',
    header: 'Amount'
  },
  {
    key: 'fullName',
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
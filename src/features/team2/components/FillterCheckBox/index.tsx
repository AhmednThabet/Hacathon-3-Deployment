import { Button } from 'components';
import { options ,invoiceOptions ,ServiceOptions } from 'features/team2/data';
import { BarsIcon } from 'lib/@heroicons';
import React, { useState } from 'react'

const  FillterCheckBox= ({setSelectedOptions , type}:any) => {
const [isOpen, setIsOpen] = useState(false);
const toggling = () => setIsOpen(!isOpen);

function FillterHandller(event:any) {
    const { value, checked } = event.target;
    if (checked === true) {
      setSelectedOptions((pre: any) => [...pre, value]);
    } else {
      setSelectedOptions((pre: any) => pre.filter((status:any) => status !== value));
    }
   }
  return (
    <div className="relative">
    <Button
      onClick={toggling}
      className="bg-white text-[#707070] hover:bg-slate-50 flex pl-5"
    >
      <BarsIcon className="h-5 w-5 mt-1 mr-1"/>
      <span>Filter</span>
      
    </Button>
    {isOpen && (
      <div className="mt-1 absolute right-0 shadow-md border">
          {type == 'all' && options?.map((option) => (
            <div key={option.id} className="bg-white flex p-2"   >
            <input type="checkbox" className="mr-5 mt-1 ml-2" value={option.id}  onChange={FillterHandller} id={option.id} />
            <label htmlFor={option.id}>
              {option.select}
            </label>
            </div>
          ))}
            {type == 'invoice' && invoiceOptions?.map((option) => (
            <div key={option.id} className="bg-white flex p-2"   >
            <input type="checkbox" className="mr-5 mt-1 ml-2" value={option.id}  onChange={FillterHandller} id={option.id} />
            <label htmlFor={option.id}>
              {option.select}
            </label>
            </div>
          ))}
          {type == 'service' && ServiceOptions?.map((option) => (
            <div key={option.id} className="bg-white flex p-2"   >
            <input type="checkbox" className="mr-5 mt-1 ml-2" value={option.id}  onChange={FillterHandller} id={option.id} />
            <label htmlFor={option.id}>
              {option.select}
            </label>
            </div>
          ))}
      </div>
    )}
  </div>
  )
}

export default FillterCheckBox
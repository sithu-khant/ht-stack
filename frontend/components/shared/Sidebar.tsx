import React, { useRef } from 'react';

import { sidebarMenuItems } from '../utils/menuItems';
import { TieredMenu } from 'primereact/tieredmenu';
import ItemCard from './ItemCard';
import { handleSortItems } from '../utils/handleSort';

const Sidebar = () => {

  const handleSortMenu: any = useRef(null);
  const categorySidebarMenu: any = useRef(null);

  const handleTableView = () => { };
  const handleTrash = () => { };

  return (
    <>
      <div className='w-[20%] h-screen overflow-y-scroll scrollbar-thin p-2 bg-background-color'>

        <div className='mt-1 p-1 flex items-center justify-end'>

          <div className='flex items-center bg-secondary-color text-input-field-background mr-1 px-3 py-1 cursor-pointer rounded-md'>
            <i className="pi pi-plus mr-2 text-xs" style={{ fontWeight: "800" }}></i>
            <p className='text-sm'>New Item</p>
          </div>

          <div>
            <TieredMenu model={handleSortItems({ handleTableView })} popup ref={handleSortMenu} breakpoint="28px" />
            <i
              className="pi pi-sort-amount-down sidebar-icon"
              onClick={(e) => handleSortMenu.current.toggle(e)}
            >
            </i>

            <TieredMenu model={sidebarMenuItems({ handleTableView, handleTrash })} popup ref={categorySidebarMenu} breakpoint="28px" />
            <i
              className="pi pi-ellipsis-v sidebar-icon"
              onClick={(e) => categorySidebarMenu.current.toggle(e)}
            >
            </i>
          </div>

        </div>

        <div className='mx-2'>

          <p className='text-sm font-semibold text-slate-500 ml-2'>A</p>
          <ItemCard />
          <ItemCard />

          <p className='text-sm font-semibold text-slate-500 ml-2'>B</p>
          <ItemCard />
          <ItemCard />
          <ItemCard />

          <p className='text-sm font-semibold text-slate-500 ml-2'>C</p>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />

        </div>

      </div>
    </>
  )
}

export default Sidebar;
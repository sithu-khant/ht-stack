import { categoryCardItems } from '@/constants';
import { TieredMenu } from 'primereact/tieredmenu';
import React, { useRef, useState } from 'react'

const Category = () => {

  const categoryCardMenu: any = useRef(null);
  const [isEllipsisClicked, setIsEllipsisClicked] = useState(false);

  const handleEllipsisClick = (e: React.MouseEvent) => {
    setIsEllipsisClicked(!isEllipsisClicked);
    categoryCardMenu.current.toggle(e)
  }

  return (
    <>
      <div className='group flex items-center justify-between text-slate-700 hover:text-slate-800 hover:bg-slate-50 cursor-pointer p-1 rounded'>

        <div className='flex items-center'>
          <p className='px-1 pr-2'>🏠</p>
          <p className='text-sm'>Personal</p>
        </div>

        <div className={`opacity-0 group-hover:opacity-100 ${isEllipsisClicked && "opacity-100"}`}>
          <TieredMenu model={categoryCardItems} popup ref={categoryCardMenu} breakpoint="28px" onHide={() => setIsEllipsisClicked(!isEllipsisClicked)} />
          <i
            className="pi pi-ellipsis-v p-1 text-sm text-slate-600 hover:text-text-color cursor-pointer"
            onClick={handleEllipsisClick}
          >
          </i>
        </div>

      </div>
    </>
  )
}

export default Category;
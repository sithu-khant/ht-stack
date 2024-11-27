export const categorySidebarItems = ({ handleSortAtoZ, handleSortZtoA, handleTrash }: any) => {

  return [
    {
      label: 'Sort',
      icon: 'pi pi-sort',
      items: [
        {
          label: 'A to Z',
          icon: 'pi pi-sort-alpha-down',
          command: () => {
            handleSortAtoZ();
          }
        },
        {
          label: 'Z to A',
          icon: 'pi pi-sort-alpha-down-alt',
          command: () => {
            handleSortZtoA();
          }
        }
      ]
    },
    {
      label: 'Trash',
      icon: 'pi pi-trash',
      command: () => {
        handleTrash();
      }
    }
  ]
}

export const categoryCardItems = ({ handleFavorite, handleRename, handleTableView, handleDelete }: any) => {
  return [
    {
      label: 'Favorite',
      icon: 'pi pi-star',
      command: () => {
        handleFavorite();
      }
    },
    {
      label: 'Rename',
      icon: 'pi pi-pencil',
      command: () => {
        handleRename();
      }
    },
    {
      label: 'Table View',
      icon: 'pi pi-table',
      command: () => {
        handleTableView();
      }
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        handleDelete();
      }
    }
  ];
}


export const subItemsSidebarItems = ({ handleSortAtoZ, handleSortZtoA }: any) => {

  return [
    {
      label: 'Sort',
      icon: 'pi pi-sort',
      items: [
        {
          label: 'A to Z',
          icon: 'pi pi-sort-alpha-down',
          command: () => {
            handleSortAtoZ();
          }
        },
        {
          label: 'Z to A',
          icon: 'pi pi-sort-alpha-down-alt',
          command: () => {
            handleSortZtoA();
          }
        }
      ]
    }
  ]
}


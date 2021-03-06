import { useTheme } from 'next-themes';
import { FunctionComponent, ReactNode } from 'react';

interface IProps {
  main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className='py-20'>
        <div className='container mx-auto bg-white rounded shadow dark:bg-gray-800'>
          <div className='flex flex-col items-start justify-between w-full p-4 lg:flex-row lg:p-8 lg:items-stretch'>
            <div className='flex flex-col items-start w-full lg:w-1/3 lg:flex-row lg:items-center'>
              <div className='flex items-center'>
                <a
                  className='p-2 text-gray-600 bg-gray-100 border border-transparent rounded cursor-pointer dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 focus:outline-none focus:border-gray-800 focus:shadow-outline-gray'
                  href='javascript: void(0)'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='cursor-pointer icon icon-tabler icon-tabler-edit'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <path d='M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
                    <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
                    <line x1={16} y1={5} x2={19} y2={8} />
                  </svg>
                </a>
                <a
                  className='p-2 mx-2 text-gray-600 bg-gray-100 border border-transparent rounded cursor-pointer dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 focus:outline-none focus:border-gray-800 focus:shadow-outline-gray'
                  href='javascript: void(0)'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='cursor-pointer icon icon-tabler icon-tabler-settings'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                </a>
                <a
                  className='p-2 mr-2 text-gray-600 bg-gray-100 border border-transparent rounded cursor-pointer dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 focus:outline-none focus:border-gray-800 focus:shadow-outline-gray'
                  href='javascript: void(0)'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-bookmark'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <path d='M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2' />
                  </svg>
                </a>
                <a
                  className='p-2 mr-2 text-gray-600 bg-gray-100 border border-transparent rounded cursor-pointer dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 focus:outline-none focus:border-gray-800 focus:shadow-outline-gray'
                  href='javascript: void(0)'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-copy'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <rect x={8} y={8} width={12} height={12} rx={2} />
                    <path d='M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2' />
                  </svg>
                </a>
                <a
                  className='p-2 text-red-500 bg-gray-100 border border-transparent rounded cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 focus:outline-none focus:border-gray-800 focus:shadow-outline-gray'
                  href='javascript: void(0)'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='cursor-pointer icon icon-tabler icon-tabler-trash'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <line x1={4} y1={7} x2={20} y2={7} />
                    <line x1={10} y1={11} x2={10} y2={17} />
                    <line x1={14} y1={11} x2={14} y2={17} />
                    <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
                    <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='flex flex-col items-start justify-end w-full lg:w-2/3 lg:flex-row lg:items-center'>
              <div className='flex items-center py-3 border-gray-300 lg:border-l lg:border-r dark:border-gray-200 lg:py-0 lg:px-6'>
                <p
                  className='text-base text-gray-600 dark:text-gray-400'
                  id='page-view'>
                  Viewing 1 - 20 of 60
                </p>
                <a
                  className='ml-2 text-gray-600 border border-transparent rounded cursor-pointer dark:text-gray-400'
                  onClick='pageView(false)'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-chevron-left'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <polyline points='15 6 9 12 15 18' />
                  </svg>
                </a>
                <a
                  className='text-gray-600 border border-transparent rounded cursor-pointer dark:text-gray-400 focus:outline-none'
                  onClick='pageView(true)'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-chevron-right'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <polyline points='9 6 15 12 9 18' />
                  </svg>
                </a>
              </div>
              <div className='flex items-center pb-3 border-gray-300 lg:border-r dark:border-gray-200 lg:pb-0 lg:px-6'>
                <div className='relative z-10 w-32'>
                  <div className='absolute inset-0 z-0 w-5 h-5 m-auto mr-2 text-gray-600 pointer-events-none dark:text-gray-400 xl:mr-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='cursor-pointer icon icon-tabler icon-tabler-chevron-down'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <polyline points='6 9 12 15 18 9' />
                    </svg>
                  </div>
                  <select
                    aria-label='Selected tab'
                    className='block w-full px-2 py-2 text-base text-gray-600 bg-transparent border border-transparent rounded appearance-none focus:outline-none focus:border-gray-800 focus:shadow-outline-gray form-select xl:px-3 dark:text-gray-400'>
                    <option>List View</option>
                    <option>Grid View</option>
                  </select>
                </div>
              </div>
              <div className='flex items-center lg:ml-6'>
                <button className='flex items-center h-8 px-5 text-sm text-indigo-700 transition duration-150 ease-in-out bg-gray-200 border border-transparent rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300'>
                  Download All
                </button>
                <div className='flex items-center justify-center w-8 h-8 ml-4 text-white transition duration-150 ease-in-out bg-indigo-700 border border-transparent rounded cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-indigo-600'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-plus'
                    width={28}
                    height={28}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full overflow-x-scroll xl:overflow-x-hidden'>
            <table className='min-w-full bg-white dark:bg-gray-800'>
              <thead>
                <tr className='w-full h-16 py-8 border-b border-gray-300 dark:border-gray-200'>
                  <th className='pl-8 pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600 dark:text-gray-400'>
                    <input
                      type='checkbox'
                      className='relative w-5 h-5 bg-white border border-gray-400 rounded outline-none cursor-pointer dark:border-gray-200 dark:bg-gray-800'
                      onClick='checkAll(this)'
                    />
                  </th>
                  <th className='pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600 dark:text-gray-400'>
                    <div className='relative w-10 text-gray-600 opacity-0 cursor-default dark:text-gray-400'>
                      <div className='absolute top-0 right-0 flex items-center justify-center w-5 h-5 mr-2 -mt-1 text-xs text-white bg-indigo-700 rounded-full'>
                        3
                      </div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-file'
                        width={28}
                        height={28}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <path d='M14 3v4a1 1 0 0 0 1 1h4' />
                        <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
                      </svg>
                    </div>
                  </th>
                  <th className='pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600 dark:text-gray-400'>
                    Invoice Number
                  </th>
                  <th className='pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600 dark:text-gray-400'>
                    Client
                  </th>
                  <th className='pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600 dark:text-gray-400'>
                    Company Contact
                  </th>
                  <th className='pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600 dark:text-gray-400'>
                    Amount
                  </th>
                  <th className='pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600 dark:text-gray-400'>
                    Date
                  </th>
                  <th className='pr-6 text-sm font-normal leading-4 tracking-normal text-left text-gray-600 dark:text-gray-400'>
                    <div className='w-2 h-2 bg-indigo-400 rounded-full opacity-0' />
                  </th>
                  <td className='pr-8 text-sm font-normal leading-4 tracking-normal text-left text-gray-600 dark:text-gray-400'>
                    More
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className='h-24 border-b border-gray-300 dark:border-gray-200'>
                  <td className='pl-8 pr-6 text-sm leading-4 tracking-normal text-left text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    <input
                      type='checkbox'
                      className='relative w-5 h-5 bg-white border border-gray-400 rounded outline-none cursor-pointer dark:border-gray-200 dark:bg-gray-800'
                      onClick='tableInteract(this)'
                    />
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    <div className='relative w-10 text-gray-600 dark:text-gray-400'>
                      <div className='absolute top-0 right-0 flex items-center justify-center w-5 h-5 mr-2 -mt-1 text-xs text-white bg-indigo-700 rounded-full'>
                        3
                      </div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-file'
                        width={28}
                        height={28}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <path d='M14 3v4a1 1 0 0 0 1 1h4' />
                        <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
                      </svg>
                    </div>
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    #MC10023
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    Toyota Motors
                  </td>
                  <td className='pr-6 whitespace-no-wrap'>
                    <div className='flex items-center'>
                      <div className='w-8 h-8'>
                        <img
                          src='https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png'
                          alt
                          className='w-full h-full overflow-hidden rounded-full shadow'
                        />
                      </div>
                      <p className='ml-2 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100'>
                        Carrie Anthony
                      </p>
                    </div>
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    $2,500
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    02.03.20
                  </td>
                  <td className='pr-6'>
                    <div className='w-2 h-2 bg-indigo-400 rounded-full' />
                  </td>
                  <td className='relative pr-8'>
                    <div className='absolute left-0 z-10 hidden w-32 mt-8 -ml-12 shadow-md dropdown-content'>
                      <ul className='py-1 bg-white rounded shadow dark:bg-gray-800'>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Edit
                        </li>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Delete
                        </li>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Duplicate
                        </li>
                      </ul>
                    </div>
                    <button className='text-gray-500 border border-transparent rounded cursor-pointer focus:outline-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        onClick='dropdownFunction(this)'
                        className='icon icon-tabler icon-tabler-dots-vertical dropbtn'
                        width={28}
                        height={28}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr className='h-24 border-b border-gray-300 dark:border-gray-200'>
                  <td className='pl-8 pr-6 text-sm leading-4 tracking-normal text-left text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    <input
                      type='checkbox'
                      className='relative w-5 h-5 bg-white border border-gray-400 rounded outline-none cursor-pointer dark:border-gray-200 dark:bg-gray-800'
                      onClick='tableInteract(this)'
                    />
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    <div className='relative w-10 text-gray-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-file'
                        width={28}
                        height={28}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <path d='M14 3v4a1 1 0 0 0 1 1h4' />
                        <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
                      </svg>
                    </div>
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    #MC10023
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    Toyota Motors
                  </td>
                  <td className='pr-6 whitespace-no-wrap'>
                    <div className='flex items-center'>
                      <div className='w-8 h-8'>
                        <img
                          src='https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png'
                          alt
                          className='w-full h-full overflow-hidden rounded-full shadow'
                        />
                      </div>
                      <p className='ml-2 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100'>
                        Carrie Anthony
                      </p>
                    </div>
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    $2,500
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    02.03.20
                  </td>
                  <td className='pr-6'>
                    <div className='w-2 h-2 bg-red-400 rounded-full' />
                  </td>
                  <td className='relative pr-8'>
                    <button className='text-gray-500 border border-transparent rounded cursor-pointer focus:outline-none '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-dots-vertical dropbtn'
                        width={28}
                        height={28}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        onClick='dropdownFunction(this)'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                      </svg>
                    </button>
                    <div className='absolute left-0 z-10 hidden w-32 mt-1 -ml-12 shadow-md dropdown-content'>
                      <ul className='py-1 bg-white rounded shadow dark:bg-gray-800'>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Edit
                        </li>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Delete
                        </li>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className='h-24 border-b border-gray-300 dark:border-gray-200'>
                  <td className='pl-8 pr-6 text-sm leading-4 tracking-normal text-left text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    <input
                      type='checkbox'
                      className='relative w-5 h-5 bg-white border border-gray-400 rounded outline-none cursor-pointer dark:border-gray-200 dark:bg-gray-800'
                      onClick='tableInteract(this)'
                    />
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    <div className='relative w-10 text-gray-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-file'
                        width={28}
                        height={28}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <path d='M14 3v4a1 1 0 0 0 1 1h4' />
                        <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
                      </svg>
                    </div>
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    #MC10023
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    Toyota Motors
                  </td>
                  <td className='pr-6 whitespace-no-wrap'>
                    <div className='flex items-center'>
                      <div className='w-8 h-8'>
                        <img
                          src='https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_3.png'
                          alt
                          className='w-full h-full overflow-hidden rounded-full shadow'
                        />
                      </div>
                      <p className='ml-2 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100'>
                        Carrie Anthony
                      </p>
                    </div>
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    $2,500
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    02.03.20
                  </td>
                  <td className='pr-6'>
                    <div className='w-2 h-2 bg-indigo-400 rounded-full' />
                  </td>
                  <td className='relative pr-8'>
                    <button className='text-gray-500 border border-transparent rounded cursor-pointer focus:outline-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-dots-vertical dropbtn'
                        width={28}
                        height={28}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        onClick='dropdownFunction(this)'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                      </svg>
                    </button>
                    <div className='absolute left-0 z-10 hidden w-32 mt-1 -ml-12 shadow-md dropdown-content'>
                      <ul className='py-1 bg-white rounded shadow dark:bg-gray-800'>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Edit
                        </li>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Delete
                        </li>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className='h-24 border-b border-gray-300 dark:border-gray-200'>
                  <td className='pl-8 pr-6 text-sm leading-4 tracking-normal text-left text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    <input
                      type='checkbox'
                      className='relative w-5 h-5 bg-white border border-gray-400 rounded outline-none cursor-pointer dark:border-gray-200 dark:bg-gray-800'
                      onClick='tableInteract(this)'
                    />
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    <div className='relative w-10 text-gray-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-file'
                        width={28}
                        height={28}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <path d='M14 3v4a1 1 0 0 0 1 1h4' />
                        <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
                      </svg>
                    </div>
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    #MC10023
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    Toyota Motors
                  </td>
                  <td className='pr-6 whitespace-no-wrap'>
                    <div className='flex items-center'>
                      <div className='w-8 h-8'>
                        <img
                          src='https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png'
                          alt
                          className='w-full h-full overflow-hidden rounded-full shadow'
                        />
                      </div>
                      <p className='ml-2 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100'>
                        Carrie Anthony
                      </p>
                    </div>
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    $2,500
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    02.03.20
                  </td>
                  <td className='pr-6'>
                    <div className='w-2 h-2 bg-indigo-400 rounded-full' />
                  </td>
                  <td className='relative pr-8'>
                    <button className='text-gray-500 border border-transparent rounded cursor-pointer focus:outline-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-dots-vertical dropbtn'
                        width={28}
                        height={28}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        onClick='dropdownFunction(this)'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                      </svg>
                    </button>
                    <div className='absolute left-0 z-10 hidden w-32 mt-1 -ml-12 shadow-md dropdown-content'>
                      <ul className='py-1 bg-white rounded shadow dark:bg-gray-800'>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Edit
                        </li>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Delete
                        </li>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className='h-24 border-b border-gray-300 dark:border-gray-200'>
                  <td className='pl-8 pr-6 text-sm leading-4 tracking-normal text-left text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    <input
                      type='checkbox'
                      className='relative w-5 h-5 bg-white border border-gray-400 rounded outline-none cursor-pointer dark:border-gray-200 dark:bg-gray-800'
                      onClick='tableInteract(this)'
                    />
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    <div className='relative w-10'>
                      <div className='absolute top-0 right-0 flex items-center justify-center w-5 h-5 mr-2 -mt-1 text-xs text-white bg-indigo-700 rounded-full'>
                        1
                      </div>
                      <div className='text-gray-600 dark:text-gray-400'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='icon icon-tabler icon-tabler-file'
                          width={28}
                          height={28}
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'>
                          <path stroke='none' d='M0 0h24v24H0z' />
                          <path d='M14 3v4a1 1 0 0 0 1 1h4' />
                          <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    #MC10023
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    Toyota Motors
                  </td>
                  <td className='pr-6 whitespace-no-wrap'>
                    <div className='flex items-center'>
                      <div className='w-8 h-8'>
                        <img
                          src='https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png'
                          alt
                          className='w-full h-full overflow-hidden rounded-full shadow'
                        />
                      </div>
                      <p className='ml-2 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100'>
                        Carrie Anthony
                      </p>
                    </div>
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    $2,500
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    02.03.20
                  </td>
                  <td className='pr-6'>
                    <div className='w-2 h-2 bg-red-400 rounded-full' />
                  </td>
                  <td className='relative pr-8'>
                    <button className='text-gray-500 border border-transparent rounded cursor-pointer focus:outline-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-dots-vertical dropbtn'
                        width={28}
                        height={28}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        onClick='dropdownFunction(this)'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                      </svg>
                    </button>
                    <div className='absolute left-0 z-10 hidden w-32 mt-1 -ml-12 shadow-md dropdown-content'>
                      <ul className='py-1 bg-white rounded shadow dark:bg-gray-800'>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Edit
                        </li>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Delete
                        </li>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className='h-24 border-b border-gray-300 dark:border-gray-200'>
                  <td className='pl-8 pr-6 text-sm leading-4 tracking-normal text-left text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    <input
                      type='checkbox'
                      className='relative w-5 h-5 bg-white border border-gray-400 rounded outline-none cursor-pointer dark:border-gray-200 dark:bg-gray-800'
                      onClick='tableInteract(this)'
                    />
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    <div className='relative w-10'>
                      <div className='absolute top-0 right-0 flex items-center justify-center w-5 h-5 mr-2 -mt-1 text-xs text-white bg-indigo-700 rounded-full'>
                        5
                      </div>
                      <div className='text-gray-600 dark:text-gray-400'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='icon icon-tabler icon-tabler-file'
                          width={28}
                          height={28}
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'>
                          <path stroke='none' d='M0 0h24v24H0z' />
                          <path d='M14 3v4a1 1 0 0 0 1 1h4' />
                          <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    #MC10023
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    Toyota Motors
                  </td>
                  <td className='pr-6 whitespace-no-wrap'>
                    <div className='flex items-center'>
                      <div className='w-8 h-8'>
                        <img
                          src='https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_3.png'
                          alt
                          className='w-full h-full overflow-hidden rounded-full shadow'
                        />
                      </div>
                      <p className='ml-2 text-sm leading-4 tracking-normal text-gray-800 dark:text-gray-100'>
                        Carrie Anthony
                      </p>
                    </div>
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    $2,500
                  </td>
                  <td className='pr-6 text-sm leading-4 tracking-normal text-gray-800 whitespace-no-wrap dark:text-gray-100'>
                    02.03.20
                  </td>
                  <td className='pr-6'>
                    <div className='w-2 h-2 bg-gray-600 rounded-full' />
                  </td>
                  <td className='relative pr-8'>
                    <button className='text-gray-500 border border-transparent rounded cursor-pointer focus:outline-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-dots-vertical dropbtn'
                        width={28}
                        height={28}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        onClick='dropdownFunction(this)'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                      </svg>
                    </button>
                    <div className='absolute left-0 z-10 hidden w-32 mt-1 -ml-12 shadow-md dropdown-content'>
                      <ul className='py-1 bg-white rounded shadow dark:bg-gray-800'>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Edit
                        </li>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Delete
                        </li>
                        <li className='px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 hover:bg-indigo-700 hover:text-white'>
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Section 1 */}
      <section className='w-full px-6 pb-12 antialiased bg-backgroundColor-light dark:bg-backgroundColor-dark'>
        <div className='mx-auto max-w-7xl'>
          <nav
            className='relative z-50 h-24 select-none'
            x-data='{ showMenu: false }'>
            <div className='container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2'>
              <div className='flex items-center justify-start w-1/4 h-full pr-4'>
                <a href='#_' className='inline-block py-4 md:py-0'>
                  <span className='p-1 text-xl font-black leading-none text-gray-900'>
                    <span>tails</span>
                    <span className='text-indigo-600'>.</span>
                  </span>
                </a>
              </div>
              <div className='top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex'>
                <div className='flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row'>
                  <a
                    href='#_'
                    className='inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden'>
                    tails<span className='text-indigo-600'>.</span>
                  </a>
                  <div className='flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center'>
                    <a
                      href='#_'
                      className='inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center'>
                      Home
                    </a>
                    <a
                      href='#_'
                      className='inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center dark:text-textColor-dark dark:hover:text-indigo-500'>
                      Features
                    </a>
                    <a
                      href='#_'
                      className='inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center dark:text-textColor-dark dark:hover:text-indigo-500'>
                      Blog
                    </a>
                    <a
                      href='#_'
                      className='inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center dark:text-textColor-dark dark:hover:text-indigo-500'>
                      Contact
                    </a>
                    <a
                      href='#_'
                      className='absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative dark:text-textColor-dark'>
                      <svg
                        className='inline w-5 h-5'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                      </svg>
                    </a>
                  </div>
                  <div className='flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0'>
                    <div className='w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto'>
                      <div className='relative inline-block w-10 mr-2 align-middle select-none'>
                        <input
                          type='checkbox'
                          name='toggle'
                          checked={theme === 'dark'}
                          id='Black'
                          className='absolute block w-6 h-6 duration-200 ease-in bg-white border-4 rounded-full outline-none appearance-none cursor-pointer checked:bg-black focus:outline-none right-4 checked:right-0'
                          onClick={() =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                          }
                        />
                        <label
                          htmlFor='Black'
                          className='block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer'
                        />
                      </div>
                      <span className='font-medium text-gray-400'>{theme}</span>
                    </div>
                    <a
                      href='#'
                      className='w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto dark:text-textColor-dark '>
                      Sign In
                    </a>
                    <a
                      href='#_'
                      className='inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white rounded-full bg-vulcan-200 bg-b md:px-3 md:w-auto lg:px-5 hover:bg-vulcan-50 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-vulcan-50'>
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
              <div className='absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100'>
                <svg
                  className='w-6 h-6 text-gray-700'
                  x-show='!showMenu'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  x-cloak>
                  <path d='M4 6h16M4 12h16M4 18h16' />
                </svg>
                <svg
                  className='w-6 h-6 text-gray-700'
                  x-show='showMenu'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  x-cloak>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </div>
            </div>
          </nav>
          {/* Main Hero Content */}
          <div className='container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center'>
            <h1 className='text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl'>
              <span className='inline md:block'>Start Crafting Your</span>{' '}
              <span className='relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block'>
                Next Great Idea
              </span>
            </h1>
            <div className='mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg'>
              Simplifying the creation of landing pages, blog pages, application
              pages and so much more!
            </div>
            <div className='flex flex-col items-center mt-12 text-center'>
              <span className='relative inline-flex w-full md:w-auto'>
                <a
                  href='#_'
                  type='button'
                  className='inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>
                  Purchase Now
                </a>
                <span className='absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full'>
                  only $15/mo
                </span>
              </span>
              <a href='#' className='mt-3 text-sm text-indigo-500'>
                Learn More
              </a>
            </div>
          </div>
          {/* End Main Hero Content */}
        </div>
      </section>
      {/* Section 2 */}
      <section className='bg-backgroundColor-light dark:bg-backgroundColor-dark'>
        <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
          <nav className='flex flex-wrap justify-center -mx-5 -my-2'>
            <div className='px-5 py-2'>
              <a
                href='#'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'>
                About
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'>
                Blog
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'>
                Team
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'>
                Pricing
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'>
                Contact
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#'
                className='text-base leading-6 text-gray-500 hover:text-gray-900'>
                Terms
              </a>
            </div>
          </nav>
          <div className='flex justify-center mt-8 space-x-6'>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Facebook</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Instagram</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Twitter</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'>
                <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
              </svg>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>GitHub</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Dribbble</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </div>
          <p className='mt-8 text-base leading-6 text-center text-gray-400'>
            © 2021 SomeCompany, Inc. All rights reserved.
          </p>
        </div>
      </section>

      {/* <main style={{ minHeight: 'calc(100vh - 64px)' }}>{main}</main> */}
    </>
  );
};

export default Layout;

import React from 'react'
import { CiBookmarkCheck } from 'react-icons/ci'

const SidebarItems = () => {
  return (
    <div>
      <li>
        <a
          href="#"
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
        >
          <CiBookmarkCheck size={30} />
          <span className="group-hover:text-gray-700">
            Categories
          </span>
        </a>
      </li>
    </div>
  )
}

export default SidebarItems


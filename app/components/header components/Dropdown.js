"use client"
import {useState} from 'react'


export default function Dropdown() {

const [dropdown, setDropdown] = useState("hidden")
function handleOnClick() {
    dropdown === "hidden" ? setDropdown("block") : setDropdown("hidden")
}
return (
    <>
<button onClick={()=>handleOnClick()} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-navy hover:bg-navy font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-navy" type="button">Menu <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div id="dropdown" class={`z-10 ${dropdown} relative left-0 top-28 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
</>

)
}
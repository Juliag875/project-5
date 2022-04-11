import React from 'react'

function NavbarTop() {
  return (
    <div className="navbar-top">
     <a id="top-a" href="https://www.facebook.com/fundraisers/explore/search/charities/?query=ukraine">
      Support Ukraine 
        <svg height="24" width="24" version="1.1" viewBox="0 0 230 140" xmlns="http://www.w3.org/2000/svg">
          <rect className="svg" fill="#0057b7" height="72" width="240" x="0" y="55"></rect>
          <rect className="svg" fill="#ffd700" height="72" width="240" x="0" y="120"></rect>
        </svg>
      <span class="message">Help Provide Humanitarian Aid to Ukraine</span>
     </a>
    </div>
  )
}

export default NavbarTop;
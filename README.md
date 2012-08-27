Bootstrap-Popover
=================

Adds 2nd-level navigation to the Bootstrap Dropdown plugin

This is very much a work in progress, and was build for Bootstrap 2.0.  Bootstrap 2.1 now supports the popover natively :)

HTML Structure
--------------

<blockquote>
<div id="navbar" class="navbar navbar-fixed-top">
  <div class="navbar-inner">
    <div class="container">
      <ul class="nav">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li class="popout"><a href="#" class="popout-toggle">Popover</a>
              <ul class="popout-menu">
                <li><a href="#">Pop Action</a></li>
              </ul>
            </li>
            <li><a href="#">Action</a></li>
            <li><a href="#">Action</a></li>
            <li class="popout"><a href="#" class="popout-toggle">EDI</a>
               <ul class="popout-menu">
                <li><a href="#">Pop Action</a></li>
                <li><a href="#">Pop Action</a></li>
                <li><a href="#">Pop Action</a></li>
              </ul>
            </li>
            <li><a href="#">Action</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
</blockquote>

Getting Started
---------------

* First, you need Bootstrap
* Second, you also need the Bootstrap Dropdown plugin
* The li dropdown element that you want a popover element for, add class "popout"
* The anchor within that li should have class "popout-toggle"
* The ul within that li should have class "popout-menu"
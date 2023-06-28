import'./Header.css'

export default function Header(){
    return(
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light ">
             <div className='nav-navbar'>
                <button class="navbar-menu-toggler"type="button"
                        data-toggle="collapse"
                        data-target="#navbarMenu"
                        aria-controls="navbarMenu"
                        aria-expanded="false"
                    >
                    <span class="navbar-toggler-menu"></span>
                     <img src="https://cdn.shopify.com/s/files/1/0951/7126/files/menu.svg?v=1653421355"alt="Toggle navigation"/>
                </button>
            </div>
        <div>
        <a class="navbar-brand"href="#">Urban Nest</a>
        </div>
        <div class="header-seacher">
            <a class="navbar-user"href="#/account"></a>
            <img src="https://cdn.shopify.com/s/files/1/0951/7126/files/account.svg?v=1653421420"/>
            <a class="navbar-cart"href="#"></a>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIHN0cm9rZT0iIzI4MzQ1NSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik02LjY5NSAyMS4yNUw1LjgxIDkuNzVoMTIuMzhsLS44ODUgMTEuNUg2LjY5NXoiLz4KICAgIDxwYXRoIHN0cm9rZT0iIzI4MzQ1NSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNSAxMlY4YzAtMS42NTctMS4zNDMtMy0zLTN2MGMtMS42NTcgMC0zIDEuMzQzLTMgM3Y0Ii8+Cjwvc3ZnPgo="/>
        </div>

        </nav>
    </div>
    );
}

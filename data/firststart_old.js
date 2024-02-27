const wait = (delay = 0) => new Promise(resolve => setTimeout(resolve, delay));

function loadingScreen() {
    const loadingDiv = $('<div>', {'class': 'h-full w-full flex items-center justify-center bg-bluey-500 dark:bg-bluey-700'});
    const LogoDiv = $('<div>', {'class': 'text-center',});
    LogoDiv.append('<svg class="w-auto h-10 mb-10" alt="handmotion Logo" width="507" height="68" viewBox="0 0 507 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6V26.7512C10.5852 21.3947 17.3962 18 25 18C38.8071 18 50 29.1929 50 43V68H44V43H43.9999C43.9998 32.5067 35.4932 24.0002 24.9999 24.0002C14.5294 24.0002 6.03711 32.4696 6 42.9313V68H0V43V0Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M96.9998 59.249C92.4146 64.6054 85.6037 68 78 68C64.1929 68 53 56.8071 53 43C53 29.1929 64.1929 18 78 18C85.6037 18 92.4146 21.3946 96.9998 26.751V18.0001H103V42.9064C103 42.9376 103 42.9688 103 43C103 43.0312 103 43.0624 103 43.0936V68H96.9998V59.249ZM96.9998 43.0441C96.9762 53.5173 88.4787 62.0002 77.9999 62.0002C67.5065 62.0002 58.9999 53.4936 58.9999 43.0002C58.9999 32.5068 67.5065 24.0002 77.9999 24.0002C88.4787 24.0002 96.9762 32.4831 96.9998 42.9563V43.0441Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M106 18H112V26.7512C116.585 21.3947 123.396 18 131 18C144.807 18 156 29.1929 156 43V68H150V43H150C150 32.5067 141.493 24.0002 131 24.0002C120.529 24.0002 112.037 32.4696 112 42.9313V68H106V43V18Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M209 0H203V26.7512C198.415 21.3947 191.604 18 184 18C170.193 18 159 29.1929 159 43C159 56.8071 170.193 68 184 68C191.604 68 198.415 64.6053 203 59.2488V68H209V43V0ZM203 43.0002C203 53.4936 194.493 62.0002 184 62.0002C173.506 62.0002 165 53.4936 165 43.0002C165 32.5068 173.506 24.0002 184 24.0002C194.493 24.0002 203 32.5068 203 43.0002Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M212 18H225V21.0629C228.562 19.1103 232.651 18 237 18C244.332 18 250.927 21.1564 255.5 26.1846C260.073 21.1564 266.668 18 274 18C287.807 18 299 29.1929 299 43V68H286V64.9371V43C286 36.3726 280.627 31 274 31C267.373 31 262 36.3726 262 43V64.9371V68H249V64.9371V43C249 36.3726 243.627 31 237 31C230.373 31 225 36.3726 225 43V64.9371V68H212V43V18Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M327 68C340.807 68 352 56.8071 352 43C352 29.1929 340.807 18 327 18C313.193 18 302 29.1929 302 43C302 56.8071 313.193 68 327 68ZM327 55C333.627 55 339 49.6274 339 43C339 36.3726 333.627 31 327 31C320.373 31 315 36.3726 315 43C315 49.6274 320.373 55 327 55Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M364 0H377V10H385V23H377V47.2994V58V67.7006C376.199 67.8962 375.362 68 374.5 68C368.869 68 364.273 63.5668 364.012 58H364V57.5V23H355V10H364V0Z" fill="white"/><rect x="388" y="33" width="13" height="35" fill="white"/><rect x="388" y="15" width="13" height="13" fill="#0CC6F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M429 68C442.807 68 454 56.8071 454 43C454 29.1929 442.807 18 429 18C415.193 18 404 29.1929 404 43C404 56.8071 415.193 68 429 68ZM429 55C435.627 55 441 49.6274 441 43C441 36.3726 435.627 31 429 31C422.373 31 417 36.3726 417 43C417 49.6274 422.373 55 429 55Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M457 18H470V21.0629C473.562 19.1103 477.651 18 482 18C495.807 18 507 29.1929 507 43V68H494V64.9371V43C494 36.3726 488.627 31 482 31C475.373 31 470 36.3726 470 43V64.9371V68H457V43V18Z" fill="white"/></svg>');
    loadingDiv.append(LogoDiv);

    return loadingDiv;
}

function expandButton() {
    const expandButtonDiv = $('<div>', {'class': 'absolute left-0 items-center pl-2'});
    const expandButton = $('<button>', {
        'data-drawer-target': 'logo-sidebar',
        'data-drawer-toggle': 'logo-sidebar',
        'aria-controls': 'logo-sidebar',
        'type': 'button',
        'class': 'inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:ring-2 focus:ring-gray-200',
    });
    const expandButtonIcon = $('<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path></svg>');

    return expandButtonDiv.append(expandButton.append(expandButtonIcon));
}

function logo() {
    const logoDiv = $('<div>', {'class': 'absolute left-1/2 block', 'style': 'margin-left: -75px;'});
    logoDiv.append('<svg class="w-auto h-5" alt="handmotion Logo" width="507" height="68" viewBox="0 0 507 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6V26.7512C10.5852 21.3947 17.3962 18 25 18C38.8071 18 50 29.1929 50 43V68H44V43H43.9999C43.9998 32.5067 35.4932 24.0002 24.9999 24.0002C14.5294 24.0002 6.03711 32.4696 6 42.9313V68H0V43V0Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M96.9998 59.249C92.4146 64.6054 85.6037 68 78 68C64.1929 68 53 56.8071 53 43C53 29.1929 64.1929 18 78 18C85.6037 18 92.4146 21.3946 96.9998 26.751V18.0001H103V42.9064C103 42.9376 103 42.9688 103 43C103 43.0312 103 43.0624 103 43.0936V68H96.9998V59.249ZM96.9998 43.0441C96.9762 53.5173 88.4787 62.0002 77.9999 62.0002C67.5065 62.0002 58.9999 53.4936 58.9999 43.0002C58.9999 32.5068 67.5065 24.0002 77.9999 24.0002C88.4787 24.0002 96.9762 32.4831 96.9998 42.9563V43.0441Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M106 18H112V26.7512C116.585 21.3947 123.396 18 131 18C144.807 18 156 29.1929 156 43V68H150V43H150C150 32.5067 141.493 24.0002 131 24.0002C120.529 24.0002 112.037 32.4696 112 42.9313V68H106V43V18Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M209 0H203V26.7512C198.415 21.3947 191.604 18 184 18C170.193 18 159 29.1929 159 43C159 56.8071 170.193 68 184 68C191.604 68 198.415 64.6053 203 59.2488V68H209V43V0ZM203 43.0002C203 53.4936 194.493 62.0002 184 62.0002C173.506 62.0002 165 53.4936 165 43.0002C165 32.5068 173.506 24.0002 184 24.0002C194.493 24.0002 203 32.5068 203 43.0002Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M212 18H225V21.0629C228.562 19.1103 232.651 18 237 18C244.332 18 250.927 21.1564 255.5 26.1846C260.073 21.1564 266.668 18 274 18C287.807 18 299 29.1929 299 43V68H286V64.9371V43C286 36.3726 280.627 31 274 31C267.373 31 262 36.3726 262 43V64.9371V68H249V64.9371V43C249 36.3726 243.627 31 237 31C230.373 31 225 36.3726 225 43V64.9371V68H212V43V18Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M327 68C340.807 68 352 56.8071 352 43C352 29.1929 340.807 18 327 18C313.193 18 302 29.1929 302 43C302 56.8071 313.193 68 327 68ZM327 55C333.627 55 339 49.6274 339 43C339 36.3726 333.627 31 327 31C320.373 31 315 36.3726 315 43C315 49.6274 320.373 55 327 55Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M364 0H377V10H385V23H377V47.2994V58V67.7006C376.199 67.8962 375.362 68 374.5 68C368.869 68 364.273 63.5668 364.012 58H364V57.5V23H355V10H364V0Z" fill="white"/><rect x="388" y="33" width="13" height="35" fill="white"/><rect x="388" y="15" width="13" height="13" fill="#0CC6F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M429 68C442.807 68 454 56.8071 454 43C454 29.1929 442.807 18 429 18C415.193 18 404 29.1929 404 43C404 56.8071 415.193 68 429 68ZM429 55C435.627 55 441 49.6274 441 43C441 36.3726 435.627 31 429 31C422.373 31 417 36.3726 417 43C417 49.6274 422.373 55 429 55Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M457 18H470V21.0629C473.562 19.1103 477.651 18 482 18C495.807 18 507 29.1929 507 43V68H494V64.9371V43C494 36.3726 488.627 31 482 31C475.373 31 470 36.3726 470 43V64.9371V68H457V43V18Z" fill="white"/></svg>')
    return logoDiv
}

function themeSwitcher() {
    const themeToggle = $('<div>', {'class': 'absolute right-0 items-center pr-4 sm:pr-8'});
    const themeToggleContent = $('<div>', {'class': 'flex items-center'});
    const themeToggleButton = $('<button>', {'class': 'text-white flex items-center p-2 border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 hover:text-gray-300 dark:hover:text-gray-400 focus:z-10 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 dark:text-white'});

    const moon = $('<svg aria-hidden="true" class="fill-gray-50 w-4 h-4" fill="currentColor" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>');
    const sun = $('<svg aria-hidden="true" class="fill-gray-50 w-4 h-4" fill="currentColor" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>');

    themeToggleButton.append(moon, sun);

    if ("dark" === localStorage.getItem("theme") || !("theme" in localStorage) && window.matchMedia("(prefers-theme: dark)").matches) {
        $("html").addClass("dark").removeClass("light");
        moon.hide(), sun.show();
    } else {
        $("html").addClass("light").removeClass("dark");
        moon.show(), sun.hide();
    }

    themeToggleButton.click(function() {
        moon.hide(), sun.hide();

        if(localStorage.getItem("theme")){
            if("light"==localStorage.getItem("theme")){
                $("html").addClass('dark').removeClass('light');
                localStorage.setItem("theme","dark");
                sun.show();
            }else{
                $("html").addClass('light').removeClass('dark');
                localStorage.setItem("theme","light");
                moon.show();
            }
        } else {
            if($("html").hasClass("dark")){
                $("html").addClass('light').removeClass('dark');
                localStorage.setItem("theme","light");
                moon.show();
            }else{
                $("html").addClass('dark').removeClass('light');
                localStorage.setItem("theme","dark");
                sun.show();
            }
        }
    });

    return themeToggle.append(themeToggleContent.append(themeToggleButton));
}

function headerElement() {
    const header = $('<header>');
    const nav = $('<nav>', {'class': 'relative w-full bg-bluey-500 dark:bg-bluey-700'});
    const navDiv = $('<div>', {'class': 'py-2.5'});
    const navContent = $('<div>', {'id': 'nav-content', 'class': 'flex items-center justify-around mx-auto w-full'});

    header.append(nav.append(navDiv.append(navContent)));

    // Blank Space
    navContent.append($('<div>', {'class': 'w-6 h-6'}));

    // Expand Button
    //navContent.append(expandButton());

    // Logo
    navContent.append(logo());

    // Theme Switcher
    navContent.append(themeSwitcher());

    return header;
}

function sectionTransition(main, sectionInstance, nextSection) {
    sectionInstance.section.fadeOut("fast", function() {
        sectionInstance = null;
        main.empty();
        nextSection = nextSection(main);
        main.append(nextSection);
        refreshLabels();
        nextSection.fadeIn("fast");
    });
}

class SectionClass {
    constructor(TitleText, TitleIcon) {
        this.TitleText = TitleText;
        this.TitleIcon = TitleIcon;

        this.section = null;
        this.sectionHeader = null;
        this.backButton = null;
        this.backButtonText = null;
        this.nextButton = null;
        this.nextButtonText =null;
        this.sectionTitle = null;
        this.sectionTitleText = null;
        this.sectionContent = null;
    }
    init() {
        this.section = $('<section>', {'class': 'w-full h-full'});
        this.sectionHeader = $('<div>', {'class': 'section-header flex justify-center flex-wrap sm:flex-nowrap'});
        this.sectionContent = $('<div>', {'class': 'section-content w-full flex justify-center'});

        this.backButton = $('<button>', {'class': 'section-back-button sm:order-1 mr-auto sm:mr-0 h-fit w-fit flex items-center text-white bg-bluey-500 dark:bg-bluey-700 hover:bg-bluey-700 hover:dark:bg-bluey-500 font-bold px-3 py-1 rounded-md'});
        this.backButtonText = $('<span>', {'html': 'Back', 'textcontent':'Back'});
        this.backButton.append('<svg class="h-auto w-5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>');
        this.backButton.append(this.backButtonText);

        this.nextButton = $('<button>', {'class': 'section-next-button sm:order-3 h-fit w-fit flex items-center text-white bg-bluey-500 dark:bg-bluey-700 hover:bg-bluey-700 hover:dark:bg-bluey-500 font-bold px-3 py-1 rounded-md'})
        this.nextButtonText = $('<span>', {'html': 'Next', 'textcontent': 'Next'});
        this.nextButton.append(this.nextButtonText);
        this.nextButton.append('<svg class="h-auto w-5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>');
        
        this.sectionTitle = $('<div>', {'class': 'section-title sm:order-2 w-full mb-10 flex flex-col justify-center items-center'});
        this.sectionTitleText = $('<p>', {
            'class': 'section-title-text text-xl font-bold',
            'html': this.TitleText,
            'textcontent': this.TitleText
        });
        this.sectionTitle.append(this.TitleIcon);
        this.sectionTitle.append(this.sectionTitleText);

        this.sectionHeader.append(this.backButton);
        this.sectionHeader.append(this.nextButton);
        this.sectionHeader.append(this.sectionTitle);
        this.section.append(this.sectionHeader);

        this.section.append(this.sectionContent);
    }
}

class ModalClass {
    constructor(modalAria, TitleText) {
        this.modalAria = modalAria;
        this.TitleText = TitleText;

        this.modal = null;
        this.background = null;

        this.panelCenter = null;
        this.panel = null;
        this.container = null;
        this.containerInner = null;
        this.icon = null;
        this.contentOuter = null;
        this.title = null;
        this.content = null;
        this.buttons = null;
    }
    init() {
        this.modal = $('<div>', {'class': 'relative z-10', 'role': 'dialog', 'aria-modal': 'true', 'aria-labelledby': this.modalAria});

        this.background = $('<div>', {'class': 'fixed inset-0 bg-gray-500 dark:bg-stone-800 bg-opacity-75 dark:bg-opacity-75'});
        this.panelCenter = $('<div>', {'class':'fixed inset-0 z-10 w-screen overflow-y-auto'});
        this.modal.append(this.background, this.panelCenter);

        this.panel = $('<div>', {'class': 'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'});
        this.panelCenter.append(this.panel);

        this.container = $('<div>', {'class': 'relative transform overflow-hidden rounded-lg bg-gray-200 dark:bg-stone-950 text-left shadow-xl  transition-all sm:my-8 sm:w-full sm:max-w-lg'});
        this.panel.append(this.container);

        this.containerInner = $('<div>', {'class': 'px-4 pb-4 pt-5 sm:p-6 sm:pb-4'});
        this.buttons = $('<div>', {'class': 'px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'});
        this.container.append(this.containerInner, this.buttons);

        this.icon = $('<div>', {'class': 'mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full'});
        this.contentOuter = $('<div>', {'class': 'mt-3 text-center '});
        this.containerInner.append(this.icon, this.contentOuter);
        
        this.title = $('<h3>', {'class': 'text-base font-semibold leading-6', 'id': this.modalAria, 'html': this.TitleText, 'textcontent': this.TitleText});
        this.content = $('<div>', {'class': 'mt-2'});
        this.contentOuter.append(this.title, this.content);
    }
}

function selectLanguageSection(main) {
    const TitleIcon = $('<svg class="h-auto w-32 text-blue-500 dark:text-blue-700" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>');
    const sectionInstance = new SectionClass('', TitleIcon);
    sectionInstance.init();

    const section = sectionInstance.section;

    sectionInstance.nextButton.css('visibility', 'hidden');
    sectionInstance.backButton.css('visibility', 'hidden');

    const content = $('<div>', {'class': 'w-4/5 sm:w-80 p-2'});
    const languagesButtons = $('<div>', {'class': 'w-full text-gray-900 rounded-lg dark:text-white'});
    languages.forEach((language, index) => {
        const buttonExtern = $('<div>', { class: index === languages.length - 1 ? '' : 'border-b border-slate-700'});
        const button = $('<button>', {
            'language': language.code,
            'type': 'button',
            'class': 'my-1 relative inline-flex items-center w-full px-4 py-2 text-lg font-medium text-stone-900 dark:text-white rounded-lg hover:bg-bluey-500 dark:hover:bg-bluey-700 hover:text-white focus:z-10 focus:ring-5 focus:ring-blue-700',
            'html': language.name + '<svg class="w-3 h-3 ml-auto" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>'
        });

        button.click(function() {
            langSelectChange(language.code);
            sectionTransition(main, sectionInstance, setupNetworkSection);
        });

        languagesButtons.append(buttonExtern.append(button));
    });

    sectionInstance.sectionContent.append(content.append(languagesButtons));

    return section;
}

function setupNetworkSection(main) {
    const TitleIcon = $('<svg class="h-auto w-32 text-blue-500 dark:text-blue-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9"/><path d="M12 3c1.333.333 2 2.333 2 6s-.667 5.667-2 6m0-12c-1.333.333-2 2.333-2 6s.667 5.667 2 6M6 9h12M3 20h7m4 0h7m-11 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-5v3"/></g></svg>');
    const TitleText = 'Select a connection mode';
    const sectionInstance = new SectionClass(TitleText, TitleIcon);
    sectionInstance.init();

    const section = sectionInstance.section;

    sectionInstance.nextButton.css('visibility', 'hidden');
    sectionInstance.backButton.click(function() {sectionTransition(main, sectionInstance, selectLanguageSection);});

    const content = $('<div>', {'class': 'w-4/5 sm:w-80 p-2'});
    const buttons = $('<div>', {'class': 'h-full w-full text-gray-900 rounded-lg dark:text-white space-y-2'});
    const buttonOptions = [{name: 'WiFi Mode', goto: setupWifiSection}, {name: 'Access Point Mode', goto: setupApSection}];

    buttonOptions.forEach((buttonOption, index) => {
        const button = $('<button>', {'type': 'button', 'class': 'group border border-gray-600 my-1 w-full relative flex items-center justify-center px-4 py-2 rounded-lg hover:bg-bluey-500 dark:hover:bg-bluey-700 focus:z-10 focus:ring-5 focus:ring-blue-700'});
        const buttonText = $('<p>', {'textcontent': buttonOption.name, 'html': buttonOption.name, 'class': 'text-lg font-medium text-stone-900 dark:text-white group-hover:text-white'});
        button.append(buttonText);
        button.click(function () {sectionTransition(main, sectionInstance, buttonOption.goto);});
        buttons.append(button);
    });

    sectionInstance.sectionContent.append(content.append(buttons));

    return section;
}


let isRequestingNetworks = false;
let isTryingToConnect = false;
function updateWiFi(networksDiv) {
    if (isRequestingNetworks) return;
    isRequestingNetworks = true;

    const searchingNetworks = $('<p>', {
        'class': 'font-bold text-xl text-center text-gray-400 dark:text-stone-700 mb-20',
        'html': 'Searching for WiFi networks...',
        'textcontent': 'Searching for WiFi networks...'
    });
    const noNetworks = $('<p>', {
        'class': 'font-bold text-xl text-center text-gray-400 dark:text-stone-700 mb-20 hidden',
        'html': 'No networks found.',
        'textcontent': 'No networks found.',
    });
    const networks = $('<div>', {'class': 'h-full w-full overflow-y-auto', 'style': 'display: none;'});

    networksDiv.empty();
    networksDiv.append(searchingNetworks);
    searchingNetworks.fadeIn('fast');

    $.ajax({
        type: 'GET',
        url: '/wifi/scan',
        crossDomain: true,
        dataType: 'json',
        success: function (response) {
            searchingNetworks.fadeOut('fast', () => {
                searchingNetworks.remove();
                const json = response.networks.filter(network => network.ssid !== null);

                if ($.isEmptyObject(response)) {
                    networksDiv.append(noNetworks);
                    noNetworks.fadeIn('fast');
                } else {
                    const json = response.networks;
                    const connectedNetwork = json.find(network => network.connected);
                    json.sort((a,b) => b.rssi - a.rssi);

                    if (connectedNetwork) {
                        const index = json.indexOf(connectedNetwork);
                        if (index !== -1) {
                            json.splice(index, 1);
                            json.unshift(connectedNetwork);
                        }
                    }

                    json.forEach(network => {
                        networksDiv.append(networks);
                        networks.fadeIn('fast');
                    });
                }
                isRequestingNetworks = false;
            });
        },
        error: function (error) {
            searchingNetworks.fadeOut('fast', () => {
                searchingNetworks.remove();
                networksDiv.append(noNetworks);
                noNetworks.fadeIn('fast');
                isRequestingNetworks = false;
            });
        }
    });

    refreshLabels();
}

/*
const createNetworkButton = (network) => {
        const isSecure = network.secure !== 0;
        const isHighQuality = network.quality >= 66;
        const isMediumQuality = network.quality >= 33;

        const networkButton = $('<button>', {'type': 'button','class': 'my-1 relative border border-gray-600 w-full px-2 py-2 text-lg font-medium text-stone-900 dark:text-white rounded-lg hover:bg-bluey-500 dark:hover:bg-bluey-700 hover:text-white focus:z-10 focus:ring-5 focus:ring-blue-700',});
        const networkButtonDiv = $('<div>', {'class': 'inline-flex items-start w-full'});
        networkButton.append(networkButtonDiv);

        const networkButtonDivText = $('<div>', {'class': 'w-full text-ellipsis overflow-hidden whitespace-nowrap text-left'});
        const networkButtonDivTextSSID = $('<p>', {'html': network.ssid, 'class': 'text-ellipsis overflow-hidden whitespace-nowrap'});
        const networkButtonDivTextConnected = $('<p>', {'html': 'Connected', 'textcontent': 'Connected', 'class': 'font-light text-xs', 'style': network.connected ? '' : 'display: none;'})
        networkButtonDiv.append(networkButtonDivText.append(networkButtonDivTextSSID, networkButtonDivTextConnected));

        const networkButtonDivIcons = $('<div>', {'class': 'ml-auto flex items-center mt-2'});
        if (isSecure) networkButtonDivIcons.append('<svg class="w-4 h-4 mr-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>');
        networkButtonDivIcons.append(`<svg class="w-4 h-4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 12 12" style="enable-background:new 0 0 12 12;" xml:space="preserve">${isHighQuality ? '<path fill="currentColor" d="M1,5C1.3,5.3,1.7,5.3,2,5.1c2.3-1.9,5.7-1.9,8.1,0c0.3,0.2,0.7,0.2,0.9,0c0.3-0.3,0.3-0.8-0.1-1c-2.9-2.3-7-2.3-9.8,0 C0.8,4.2,0.7,4.7,1,5z"/>' : ''}${isMediumQuality ? '<path fill="currentColor" d="M3,7C3.3,7.3,3.7,7.3,4,7.1c1.2-0.9,2.9-0.9,4.1,0C8.3,7.3,8.7,7.3,9,7l0,0C9.3,6.7,9.2,6.2,8.9,6C7.2,4.7,4.8,4.7,3.1,6 C2.8,6.2,2.7,6.7,3,7z"/>' : ''}<path fill="currentColor" d="M4.9,8.9l0.7,0.7c0.2,0.2,0.5,0.2,0.7,0l0.7-0.7C7.3,8.7,7.3,8.3,7,8.1c-0.6-0.3-1.3-0.3-2,0C4.7,8.3,4.7,8.7,4.9,8.9z"/></svg>`);
        networkButtonDiv.append(networkButtonDivIcons)

        networks.append(networkButton);

        
        networkButton.click(function () {
            const modal = new ModalClass('wifi-connect', 'Connect to the network "' + network.ssid + '"');
            modal.init();
            
            modal.icon[0].className += ' bg-bluey-500 dark:bg-bluey-700';
            modal.icon.append($('<svg class="h-6 w-6 text-gray-200 dark:text-stone-950" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="currentColor" d="M12 6a6.21 6.21 0 0 0-6.21 5H2v2h3.83A6.23 6.23 0 0 0 12 18h5V6Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="M33.79 23h-3.65a6.25 6.25 0 0 0-6.21-5H19v2h-5a1 1 0 0 0-1 1a1 1 0 0 0 1 1h5v4h-5a1 1 0 0 0-1 1a1 1 0 0 0 1 1h5v2h4.94a6.23 6.23 0 0 0 6.22-5h3.64Z" class="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>'))
            
            const modalTitle = $('<div>', {'class': 'flex justify-center',}).append(
                $('<h3>', {'class': 'text-base font-semibold leading-6', 'html': 'Connect to the network "', 'textcontent': 'Connect to the network'}),
                $('<h3>', {'class': 'text-base font-semibold leading-6', 'html': network.ssid}),
                $('<h3>', {'class': 'text-base font-semibold leading-6', 'html': '"'})
            );
            modal.title.replaceWith(modalTitle);

            const password = {
                div: $('<div>', {'class': 'mt-2'}),
                label: $('<label>', {'class': 'text-left block mb-1 text-sm font-medium text-gray-900 dark:text-white', 'for': 'password', 'html': 'Enter network security key', 'textcontent': 'Enter network security key'}),
                input: $('<input>', {'type': 'password', 'name': 'password', 'placeholder': '••••••••', 'class': 'bg-gray-200 dark:bg-stone-900 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}),
                minChars: $('<p>', {'html': 'Password must be at least 8 characters long', 'textcontent': 'Password must be at least 8 characters long', 'class': 'text-sm text-red-500 font-semibold', 'style': 'visibility: hidden;'}),
                error: $('<p>', {'html': 'Error connecting to the network', 'textcontent': 'Error connecting to the network', 'class': 'text-sm text-red-500 font-semibold', 'style': 'visibility: hidden;'})
            }
            password.div.append(password.label, password.input, password.minChars, password.error);
            if (isSecure) modal.content.append(password.div);

            const connectButton = $('<button>', {
                'type': 'button',
                'class': 'connect inline-flex w-full justify-center rounded-md bg-bluey-500 dark:bg-bluey-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bluey-600 hover:dark:bg-bluey-600 sm:ml-3 sm:w-auto',
                'html': 'Connect',
                'textcontent': 'Connect'
            });
            const cancelButton = $('<button>', {
                'type': 'button', 
                'class': 'cancel mt-3 inline-flex w-full justify-center rounded-md bg-gray-200 dark:bg-stone-950 hover:bg-gray-300 hover:dark:bg-stone-900 px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto',
                'html': 'Cancel',
                'textcontent': 'Cancel'
            });
            modal.buttons.append(connectButton, cancelButton);

            networksDiv.append(modal.modal);
            modal.modal.fadeIn("fast");
            
            cancelButton.click(function () {
                if (isTryingToConnect) return;
                modal.modal.fadeOut("fast", () => {
                    modal.modal.remove();
                });
            });
            modal.modal.on('mousedown', function (e) {
                if (isTryingToConnect) return;
                if (!modal.container.is(e.target) && modal.container.has(e.target).length === 0) {
                    modal.modal.fadeOut("fast", () => {modal.modal.remove();})
                };
            });
            modal.modal.on('keydown', function (e) {if (e.key === 'Escape' || e.keyCode === 27) modal.modal.mousedown();});
            password.input.on('keydown', function (e) {if (e.key === 'Enter' || e.keyCode === 13) connectButton.click();});

            connectButton.click(function () {
                if (isTryingToConnect) return;
                password.minChars.css('visibility', 'hidden');
                password.error.css('visibility', 'hidden');

                if (isSecure) {
                    if (password.input.val().length < 8) {
                        password.error.before(password.minChars);
                        password.minChars.css('visibility', 'visible');
                        password.input.focus().keydown(function() {
                            if (password.input.val().length >= 7) {
                                password.minChars.css('visibility', 'hidden');
                            }
                        });
                        return;
                    }
                } else password.input.val("");

                password.minChars.before(password.error);

                isTryingToConnect = true;
                modal.containerInner.css('filter', 'blur(2px)');
                modal.buttons.css('filter', 'blur(2px)');

                const loadingContainter = $('<div>', {'class': 'fixed h-full w-full top-0 flex justify-center items-center'});
                loadingContainter.css('filter', 'blur(-2px)');
                loadingContainter.append($('<svg class="animate-spin h-12 w-12 text-bluey-500 dark:text-bluey-700 z-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'))
                modal.container.append(loadingContainter);

                $.ajax({
                    type: "POST",
                    url: "http://handmotion.local/wifi/connect",
                    contentType: "application/json",
                    data: JSON.stringify({type: "check", ssid: network.ssid, password: password.input.val()}),
                    success: function (response) {
                        let isRequesingPending = false;
                        function requestCheck() {
                            if (isRequesingPending) return false;
                            isRequesingPending = true;

                            $.ajax({
                                type: "POST",
                                url: "http://handmotion.local/wifi/connect",
                                contentType: "application/json",
                                data: JSON.stringify({type: "response", ssid: network.ssid, password: password.input.val()}),
                                success: function (response) {
                                    if (response == "Checking") {
                                        isRequesingPending = false;
                                        return false;
                                    }

                                    const connectedModal = new ModalClass('wifi-result', 'Successfully connected');
                                    connectedModal.init();
                                    connectedModal.icon[0].className += ' p-2 bg-green-100 text-green-600';
                                    connectedModal.icon.append($('<svg class="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se axy"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>'))
                                    connectedModal.content.append($('<p>', {
                                        'class': 'text-md',
                                        'html': 'You are now connected to the internet network; we will redirect you to the page where you can control your <strong>handmotion</strong> device.',
                                        'textcontent': 'You are now connected to the internet network; we will redirect you to the page where you can control your handmotion device.'
                                    }));

                                    const okButton = $('<button>', {
                                        'type': 'button',
                                        'class': 'inline-flex w-full justify-center rounded-md bg-bluey-500 dark:bg-bluey-700 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-bluey-600 hover:dark:bg-bluey-600',
                                        'html': 'Ok',
                                        'textcontent': 'Ok'
                                    });
                                    connectedModal.buttons.append(okButton);

                                    modal.modal.fadeOut("fast", () => {
                                        networksDiv.append(connectedModal.modal);
                                        connectedModal.modal.fadeIn("fast");
                                        modal.modal.remove();
                                    });

                                    okButton.click(function () {});

                                    isRequesingPending = false;
                                    return true;
                                },
                                error: function (error) {
                                    isRequesingPending = false;
                                    password.error.css('visibility', 'visible');
                                    return true;
                                }
                            })
                        }

                        const startTime = new Date().getTime();
                        const intervalId = setInterval(function () {
                            const currentTime = new Date().getTime();
                            if (currentTime - startTime >= 15000) {
                                clearInterval(intervalId);
                            }
                            if (requestCheck()) {
                                clearInterval(intervalId);
                            }
                        }, 1000);

                        isTryingToConnect = false;
                        modal.containerInner.css('filter', 'blur(0px)');
                        modal.buttons.css('filter', 'blur(0px)');
                        loadingContainter.remove();
                    },
                    error: function (error) {
                        isTryingToConnect = false;
                        modal.containerInner.css('filter', 'blur(0px)');
                        modal.buttons.css('filter', 'blur(0px)');
                        loadingContainter.remove();
                        password.error.css('visibility', 'visible');
                    },
                })
            });
        });
    }
    */

function setupWifiSection(main) {
    const TitleIcon = $('<svg class="h-auto w-32 text-blue-500 dark:text-blue-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.06 10.06c.51.51 1.32.56 1.87.1c4.67-3.84 11.45-3.84 16.13-.01c.56.46 1.38.42 1.89-.09c.59-.59.55-1.57-.1-2.1c-5.71-4.67-13.97-4.67-19.69 0c-.65.52-.7 1.5-.1 2.1zm7.76 7.76l1.47 1.47c.39.39 1.02.39 1.41 0l1.47-1.47c.47-.47.37-1.28-.23-1.59a4.28 4.28 0 0 0-3.91 0c-.57.31-.68 1.12-.21 1.59zm-3.73-3.73c.49.49 1.26.54 1.83.13a7.064 7.064 0 0 1 8.16 0c.57.4 1.34.36 1.83-.13l.01-.01c.6-.6.56-1.62-.13-2.11c-3.44-2.49-8.13-2.49-11.58 0c-.69.5-.73 1.51-.12 2.12z"/></svg>');
    const TitleText = 'Connect to a Wi-Fi network';
    const sectionInstance = new SectionClass(TitleText, TitleIcon);
    sectionInstance.init();

    const section = sectionInstance.section;

    sectionInstance.nextButton.css('visibility', 'hidden');
    sectionInstance.backButton.click(function() {sectionTransition(main, sectionInstance, setupNetworkSection);});

    const content = $('<div>', {'class': 'w-11/12 sm:w-80 p-2'});
    const container = $('<div>', {'class': 'h-72 max-h-72 w-full text-gray-900 rounded-lg dark:text-white space-y-2'})

    const networksDiv = $('<div>', {'class': 'h-full w-full flex flex-col items-center justify-center'});
    container.append(networksDiv);

    const updateButton = $('<button>', {'class': 'w-full flex items-center justify-center text-white bg-bluey-500 dark:bg-bluey-700 hover:bg-bluey-700 hover:dark:bg-bluey-500 font-bold px-3 py-2 rounded-md'});
    const updateButtonLogo = $('<svg class="h-auto w-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19.933 13.041a8 8 0 1 1-9.925-8.788c3.899-1 7.935 1.007 9.425 4.747"/><path d="M20 4v5h-5"/></g></svg>');
    const updateButtonText = $('<p>', {'html': 'Refresh', 'textcontent': 'Refresh'});
    updateButton.append(updateButtonLogo, updateButtonText);
    container.append(updateButton);

    content.append(container);
    sectionInstance.sectionContent.append(content);

    updateWiFi(networksDiv);
    updateButton.click(function() {
        updateWiFi(networksDiv);
    });

    return section;
}

function setupApSection(main) {
    const TitleIcon = $('<svg class="h-auto w-32 text-blue-500 dark:text-blue-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 14v-3h2v3h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h5ZM2.51 8.837C3.835 4.864 7.584 2 12 2c4.418 0 8.166 2.864 9.49 6.837l-1.898.632a8.004 8.004 0 0 0-15.183 0L2.51 8.837Zm3.796 1.265a6.003 6.003 0 0 1 11.388 0l-1.898.633a4.002 4.002 0 0 0-7.592 0l-1.898-.633Z"/></svg>');
    const TitleText = 'Configure Access Point mode';
    const sectionInstance = new SectionClass(TitleText, TitleIcon);
    sectionInstance.init();

    const section = sectionInstance.section;

    sectionInstance.nextButton.css('visibility', 'hidden');
    sectionInstance.backButton.click(function() {sectionTransition(main, sectionInstance, setupNetworkSection);});

    const Content = $('<div>', {'class': 'w-4/5 sm:w-80 p-2'});
    const formContent = $('<div>', {'class': 'w-4/5 sm:w-80 bg-gray-200 dark:bg-stone-950 p-2 rounded-lg'});

    const ssidDiv = $('<div>', {'class': 'mt-2'});
    const ssidLabel = $('<label>', {
        'for': 'SSID',
        'class': 'block mb-1 text-sm font-medium text-gray-900 dark:text-white',
        'html': 'SSID'
    });
    const ssid = $('<input>', {
        'type': 'text',
        'name': 'SSID',
        'class': 'bg-gray-200 dark:bg-stone-900 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500',
        'value': 'HANDMOTION-DEVICE',
        'disabled': true,
        'autocomplete': false
    });
    ssidDiv.append(ssidLabel);
    ssidDiv.append(ssid);
    formContent.append(ssidDiv);

    const passwordDiv = $('<div>', {'class': 'mt-2'});
    const passwordLabel = $('<label>', {
        'for': 'PASSWORD',
        'class': 'block mb-1 text-sm font-medium text-gray-900 dark:text-white',
        'html': 'Password',
        'textcontent': 'Password'
    });
    const password = $('<input>', {
        'type': 'password',
        'name': 'PASSWORD',
        'placeholder': '••••••••',
        'class': 'bg-gray-200 dark:bg-stone-900 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
        'autocomplete': false
    });
    passwordDiv.append(passwordLabel);
    passwordDiv.append(password);
    formContent.append(passwordDiv);

    const eigthChars = $('<p>', {
        'html': 'Password must be at least 8 characters long',
        'textcontent': 'Password must be at least 8 characters long',
        'class': 'text-sm text-red-500 font-semibold',
        'style': 'visibility: hidden;'
    });
    formContent.append(eigthChars);

    const setupButtonDiv = $('<div>', {'class': 'h-full w-full text-gray-900 rounded-lg dark:text-white space-y-2'});
    const setupButton = $('<button>', {'type': 'button', 'class': 'border border-gray-600 my-1 w-full relative flex items-center justify-center px-4 py-2 rounded-lg hover:bg-bluey-500 dark:hover:bg-bluey-700 focus:z-10 focus:ring-5 focus:ring-blue-700',});
    const setupButtonText = $('<p>', {
        'class': 'text-lg font-medium text-stone-900 dark:text-white hover:text-white',
        'html': 'Setup',
        'textcontent': 'Setup'
    });
    setupButtonDiv.append(setupButton.append(setupButtonText));
    formContent.append(setupButtonDiv);

    setupButton.click(function() {
        ssid.val('HANDMOTION-DEVICE');
        if (password.val().length < 8) {
            eigthChars.css('visibility', 'visible');
            password.focus().keydown(function() {
                if (password.val().length >= 7) {
                    eigthChars.css('visibility', 'hidden');
                }
            });
            return;
        } else {
            console.log("connect");
            eigthChars.css('visibility', 'hidden');
        }
    });

    sectionInstance.sectionContent.append(Content.append(formContent));

    return section;
}

$(document).ready(function() {
    const body = $('body');
    body.addClass("h-screen bg-gray-200 dark:bg-stone-950");

    const loading = loadingScreen();
    body.append(loading);

    const app = $('<div>', {'id': 'app','class': 'h-5/6 w-full',});

    // Header
    const header = headerElement();
    app.append(header);

    const main = $('<main>', {'class': 'py-5 px-4 sm:px-8 text-gray-900 dark:text-white flex justify-center flex-col'});
    app.append(main);

    main.append(selectLanguageSection(main));
    refreshLabels();

    wait(1000).then(() => {
        loading.fadeOut("slow", () => {
            loading.remove();
            body.append(app);
            app.fadeIn("slow");
        });
    });
});
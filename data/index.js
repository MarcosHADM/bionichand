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
        'id': 'sidenav-trigger',
        'type': 'button',
        'class': 'inline-flex items-center p-2 text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:ring-2 focus:ring-gray-200 transition-all duration-200'
    });
    const expandButtonIcon = $('<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path></svg>');

    
    expandButton.click(function() {
        $('aside').toggleClass('translate-x-0');
        $('aside').toggleClass('drop-shadow-xl');
        expandButton.toggleClass('hidden');
    });

    $(document).on('mousedown', function (e) {
        if (!$('aside').is(e.target) && $('aside').has(e.target).length === 0) {
            if ($($('aside')).hasClass("translate-x-0")) {
                $(expandButton).click();
            }
        }
    });

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
    navContent.append(expandButton());

    // Logo
    navContent.append(logo());

    // Theme Switcher
    navContent.append(themeSwitcher());

    return header;
}

var control = {
    "Little finger": false,
    "Ring finger": false,
    "Middle finger": false,
    "Index finger": false,
    "Thumb": false,
    "Speed": "1"
}

function sendControl() {
    $.ajax({
        type: "POST",
        url: "/servo",
        contentType: "application/json",
        data: JSON.stringify(control),
        success: function (response) {
            console.log(response);
        },
        error: function (error) {
            console.log(error);
        }
    });
}



var ESPstatistics = {
    "SDK Version": "Loading...",
    "WiFi Mode": "Loading...",
    "MAC Address": "Loading...",
    "Temperature": "Loading...",
    "Uptime": "Loading...",
    "Free Heap": "Loading...",
    "Total Heap": "Loading...",
    "Flash Size": "Loading...",
    "Available Size": "Loading..."
}

function home(parent) {
    const content1 = $('<div>', {'class': 'grid md:grid-cols-10 lg:grid-cols-12 gap-6'});

    const handOuter = $('<div>', {'class': 'grid justify-items-center bg-blue-500 xl:col-span-10 lg:col-span-9 md:col-span-7 border-black/12.5 dark:border-white/12.5 drop-shadow-xl relative break-words rounded-2xl border-0 border-solid bg-gray-50 dark:bg-gray-900 bg-clip-border'});
    const handContent = $('<div>', {'class': 'w-full md:w-auto md:h-full'});
    const hand = $('<svg class="md:h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500"><path id="littleFinger" d="M92.2,169.92c19.85,37.45,39.7,74.9,59.56,112.35c-15.56,8.67-31.13,17.33-46.69,26c-20.09-37.71-40.18-75.42-60.28-113.14c-6.9-13-1.9-29.37,11.07-36.29C68.86,151.9,85.27,156.9,92.2,169.92z"/><path id="ringFinger" d="M167.25,97.05c12.48,54.35,24.95,108.69,37.43,163.04c-17.31,4.05-34.63,8.1-51.94,12.15c-12.6-54.37-25.2-108.74-37.8-163.11c-3.3-14.35,5.77-28.87,20.09-32.19C149.36,73.61,163.92,82.68,167.25,97.05z"/><path id="middleFinger" d="M262.96,76.84c-0.07,58.72-0.13,117.44-0.2,176.16c-17.79,0-35.58,0-53.37,0c-0.04-58.72-0.09-117.44-0.13-176.16c0.01-14.72,12.11-26.83,26.81-26.85C250.8,49.97,262.95,62.09,262.96,76.84z"/><path id="indexFinger" d="M352.01,109.25c-11.48,53.7-22.97,107.4-34.45,161.1c-17.39-3.72-34.78-7.44-52.17-11.16c11.37-53.7,22.73-107.4,34.1-161.1c3.07-14.4,17.42-23.72,31.81-20.69C345.71,80.45,355.07,94.82,352.01,109.25z"/><path id="thumb" d="M441.81,287c-21.02,27.83-42.05,55.66-63.07,83.48c-14.23-10.73-28.47-21.46-42.7-32.19c20.96-27.87,41.93-55.74,62.89-83.61c8.87-11.75,25.82-14.14,37.57-5.3C448.28,258.23,450.68,275.22,441.81,287z"/><path id="palm" d="M117,390c1.34,7.32,5.5,24.48,20,40c11.05,11.83,23.18,17.44,30,20c43.33,0,86.67,0,130,0c3.51,0.26,11.45,0.37,20-4c6.99-3.57,11.08-8.58,13-11c8.61-10.82,28.19-36.33,53.56-70.89c-14.24-10.73-28.48-21.46-42.72-32.19c-2.72,1.76-4.97,2.14-6.8,1.88c-11.18-1.6-16.82-28.56-17.38-46.01c-0.38-11.83,1.52-21.37,2.96-27.04c-17.4-3.7-34.8-7.4-52.21-11.1c-0.56-0.38-1.16-0.87-1.75-1.48c-1.78-1.84-2.55-3.9-2.9-5.17c-17.78,0-35.57,0-53.35,0c-0.35,1.32-1.48,4.79-4.78,6.8c-0.72,0.44-1.43,0.74-2.1,0.95c-17.33,4-34.67,8-52,12c0.36,1.23,1.05,4.27-0.12,7.76c-0.69,2.06-1.77,3.53-2.55,4.4c-15.73,8.36-31.46,16.73-47.19,25.09c9.83,37.89,13.17,61.08,14.25,75.65C115.09,377.87,115.73,383.05,117,390z"/></svg>');
    content1.append(handOuter.append(handContent.append(hand)));

    const buttonList = $('<div>', {'class': 'grid grid-cols-3 gap-3 md:grid-cols-1 xl:col-span-2 lg:col-span-3 md:col-span-3 p-3 border-black/12.5 dark:border-white/12.5 drop-shadow-xl relative break-words rounded-2xl border-0 border-solid bg-gray-50 dark:bg-gray-900 bg-clip-border'});

    const buttons = [
        {'name': 'Little finger', 'color': '#f6dc54', 'IndexID': '#littleFinger'},
        {'name': 'Ring finger', 'color': '#74b65f', 'IndexID': '#ringFinger'},
        {'name': 'Middle finger', 'color': '#4fade0', 'IndexID': '#middleFinger'},
        {'name': 'Index finger', 'color': '#d15150', 'IndexID': '#indexFinger'},
        {'name': 'Thumb', 'color': '#9865a6', 'IndexID': '#thumb'},
    ]
    
    buttons.forEach(button => {
        const fingerButton = $('<button>', {'class': 'hover:bg-gray-300 dark:hover:bg-gray-800 flex flex-col justify-center items-center rounded-lg'});
        const fingerButtonName = $('<div>', {'class': 'font-semibold text-xl', 'textcontent': button.name, 'html': button.name});
        const fingerButtonIcon = $('<div>', {'class': 'w-11 h-auto'});
        const icon = hand.clone();
        icon.find(button.IndexID).css('fill', button.color);

        fingerButton.append(fingerButtonName, fingerButtonIcon.append(icon));
        buttonList.append(fingerButton);

        function updateFingerButtons() {
            if (control[button.name]) {
                fingerButton.removeClass('hover:bg-gray-300 dark:hover:bg-gray-800');
                fingerButton.addClass('bg-bluey-500 hover:bg-bluey-700 dark:bg-bluey-800 dark:hover:bg-bluey-900 text-white');
            } else {
                fingerButton.addClass('hover:bg-gray-300 dark:hover:bg-gray-800');
                fingerButton.removeClass('bg-bluey-500 hover:bg-bluey-700 dark:bg-bluey-800 dark:hover:bg-bluey-900 text-white');
            }
        }

        updateFingerButtons();

        fingerButton.click(function() {
            if (control[button.name]) control[button.name] = false;
            else control[button.name] = true;
            updateFingerButtons();
            sendControl();
        });
    });

    content1.append(buttonList);

    const content2 = $('<div>', {'class': 'w-full h-min rounded-2xl border-0 border-solid bg-gray-50 dark:bg-gray-900 bg-clip-border pb-6 px-6 pt-3'});
    const label = $('<lavel>', {'class': 'font-semibold text-xl', 'textcontent': 'Speed', 'html': 'Speed'});

    const rangeOuter = $('<div>', {'class': 'mt-6'});
    const range = $('<input>', {'id':'range_speed', 'type': 'range', 'min':'1', 'max':'5', 'value':control['Speed'], 'class':'', 'step':'1'});
    
    range.on('input', function() {
        control['Speed'] = range.val();
        sendControl();
    });

    const dividers = $('<div>', {'class': 'w-full flex justify-between text-xs px-2'});
    for (let i = 0; i<5; i++) {
        const divider = $('<div>', {'class': 'flex flex-col justify-center items-center'});
        divider.append($('<div>', {'html': '|'}));
        divider.append($('<div>', {'html': i+1}));
        dividers.append(divider);
    }
    rangeOuter.append(range, dividers);
    content2.append(label, rangeOuter);

    parent.attr('class', 'h-full grow pl-6 lg:ml-60 lg:pl-3 pr-6 py-6 overflow-auto grid gap-6');
    parent.append(content1, content2);

    $('#range_speed').val(control["Speed"]);
    console.log(control["Speed"]);
    refreshLabels();
}

function statistics(parent) {
    const row1 = $('<div>', {'class': 'flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0'});
    const row1content = [
        {'name': 'SDK Version'},
        {'name': 'WiFi Mode'},
        {'name': 'MAC Address'}
    ];
    row1content.forEach(content => {
        const card = $('<div>', {'class': 'bg-gray-50 dark:bg-gray-800 rounded-2xl flex flex-col space-y-2 px-8 py-6 w-full'})
        const cardTitle = $('<div>', {'class': 'font-semibold', 'textcontent': content.name, 'html': content.name});
        const cardSubtitle = $('<div>', {'class': '2xl:text-4xl xl:text-3xl lg:text-xl md:text-lg text-xl font-extrabold', 'html': ESPstatistics[content.name]});

        card.append(cardTitle, cardSubtitle);
        row1.append(card);
    });

    const row2 = $('<div>', {'class': 'flex-1 flex flex-col space-y-6'});
    const row21 = $('<div>', {'class': 'flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0'});

    // TEMP CARD
    const tempCard = $('<div>', {'class': 'bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-5 flex items-center space-x-5 h-max w-full'});
    const tempCardIcon = $('<div>', {'class': 'bg-gray-200 dark:bg-gray-700 p-2.5 rounded-xl'});
    tempCardIcon.append('<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1Z"/></svg>');
    const tempCardValue = $('<span>', {'html': ESPstatistics.Temperature});
    tempCard.append(tempCardIcon, tempCardValue);

    // UPTIME CARD
    const uptimeCard = $('<div>', {'class': 'bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-5 flex items-center space-x-5 h-max w-full'});
    const uptimeCardIcon = $('<div>', {'class': 'bg-gray-200 dark:bg-gray-700 p-2.5 rounded-xl'});
    uptimeCardIcon.append('<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"/><path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34zM12 6a1 1 0 0 0-.993.883L11 7v5l.009.131a1 1 0 0 0 .197.477l.087.1l3 3l.094.082a1 1 0 0 0 1.226 0l.094-.083l.083-.094a1 1 0 0 0 0-1.226l-.083-.094L13 11.585V7l-.007-.117A1 1 0 0 0 12 6z"/></g></svg>');
    const uptimeCardValue = $('<div>', {'class': 'grow grid grid-flow-col gap-5 text-center auto-cols-max'});
    const timer = {
        'days': 0,
        'hours': 0,
        'min': 0,
        'sec': Math.floor(ESPstatistics.Uptime / 1000000)
    }
    timer.min = Math.floor(timer.sec / 60);
    timer.hours = Math.floor(timer.min / 60);
    timer.days = Math.floor(timer.hours / 24);

    timer.sec %= 60;
    timer.min %= 60;
    timer.hours %= 24;

    Object.keys(timer).forEach((key) => {
        const timeDiv = $('<div>', { class: 'flex flex-col' });
        const timeSpan = $('<span>', {class: 'countdown font-mono text-2xl', html: timer[key]});
        const timeText = $('<span>', {textcontent: key, html: key});
        timeDiv.append(timeSpan, timeText);
        uptimeCardValue.append(timeDiv);
    });
    uptimeCard.append(uptimeCardIcon, uptimeCardValue);

    row21.append(tempCard, uptimeCard);

    const row22 = $('<div>', {'class': 'flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0'});

    // HEAP CARD
    const heapCard = $('<div>', {'class': 'bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-5 flex items-center space-x-5 h-max w-full'});
    const heapCardIcon = $('<div>', {'class': 'bg-gray-200 dark:bg-gray-700 p-2.5 rounded-xl'});
    heapCardIcon.append('<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 19q-.825 0-1.413-.588T1 17V7q0-.825.588-1.413T3 5h10q.825 0 1.413.588T15 7v10q0 .825-.588 1.413T13 19H3Zm15-8q-.425 0-.713-.288T17 10V6q0-.425.288-.713T18 5h4q.425 0 .713.288T23 6v4q0 .425-.288.713T22 11h-4Zm0 8q-.425 0-.713-.288T17 18v-4q0-.425.288-.713T18 13h4q.425 0 .713.288T23 14v4q0 .425-.288.713T22 19h-4Zm-7.5-3q.625 0 1.063-.438T12 14.5q0-.625-.438-1.063T10.5 13q-.625 0-1.063.438T9 14.5q0 .625.438 1.063T10.5 16Zm-4.35-.75l5.1-5.1q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-5.1 5.1q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275ZM5.5 11q.625 0 1.062-.438T7 9.5q0-.625-.438-1.063T5.5 8q-.625 0-1.063.438T4 9.5q0 .625.438 1.063T5.5 11Z"/></svg>');
    const heapCardValue = $('<span>', {'class': 'grow'});
    const heapCardValueProgress = $('<progress>', {'class': 'progress', 'value': ESPstatistics["Total Heap"] - ESPstatistics["Free Heap"], 'max': ESPstatistics["Total Heap"]});
    heapCardValue.append('Free Heap / Total Heap', heapCardValueProgress);
    heapCard.append(heapCardIcon, heapCardValue);

    // STORAGE CARD
    const storageCard = $('<div>', {'class': 'bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-5 flex items-center space-x-5 h-max w-full'});
    const storageCardIcon = $('<div>', {'class': 'bg-gray-200 dark:bg-gray-700 p-2.5 rounded-xl'});
    storageCardIcon.append('<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2h-7.17c-.53 0-1.04.21-1.42.59L4.6 7.42c-.37.37-.6.88-.6 1.4V20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm3 0c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm3 0c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z"/></svg>');
    const storageCardValue = $('<span>', {'class': 'grow'});
    const storageCardValueProgress = $('<progress>', {'class': 'progress', 'value': ESPstatistics["Flash Size"] - ESPstatistics["Available Size"], 'max': ESPstatistics["Flash Size"]});
    storageCardValue.append('Storage(flash_size, available_size)', storageCardValueProgress);
    storageCard.append(storageCardIcon, storageCardValue);

    row22.append(heapCard, storageCard);
    row2.append(row21, row22);

    parent.attr('class', 'h-full grow pl-6 lg:ml-60 lg:pl-3 pr-6 py-6 flex flex-col space-y-6 overflow-auto');
    parent.append(row1, row2);
    refreshLabels();
}

function settingsConnection(parent) {
    const backButton = $('<button>', {'class': 'h-fit w-fit flex items-center text-white bg-bluey-500 dark:bg-bluey-700 hover:bg-bluey-700 hover:dark:bg-bluey-500 font-bold px-3 py-1 rounded-md'});
    const backButtonText = $('<span>', {'html': 'Back', 'textcontent':'Back'});
    backButton.append('<svg class="h-auto w-5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>');
    backButton.append(backButtonText);
    backButton.click(function() {
        parent.empty();
        settings(parent);
    });
    
    const tabs = $('<div>', {'class': 'flex items-center mb-4 border-b-2 border-gray-300 dark:border-gray-800'});
    const tab1Button = $('<button>', {'class': 'px-4 py-2', 'html': 'Access Point Mode', 'textcontent': 'Access Point Mode'});
    const tab2Button = $('<button>', {'class': 'px-4 py-2', 'html': 'WiFi Mode', 'textcontent': 'WiFi Mode'});
    tabs.append(tab1Button, tab2Button);

    const content = $('<div>', {'class': 'w-full flex flex-col items-center'});

    const apContent = $('<div>', {'class': 'w-full flex flex-col items-center'});
    const apTitle = $('<div>', {'class': 'w-full flex flex-col'});
    const apTitleLabel = $('<div>', {'class': 'text-center text-xl font-bold', 'html': 'Access Point Mode', 'textcontent': 'Access Point Mode'});
    const apTitleDesc = $('<div>', {'class': 'text-center', 'html': "Configure the device's Access Point.", 'textcontent': "Configure the device's Access Point."});
    apTitle.append(apTitleLabel, apTitleDesc);

    const apForm = $('<div>', {'class': 'flex flex-col items-center w-4/5 sm:w-80'});

    const ssidDiv = $('<div>', {'class': 'mt-2 w-full'});
    const ssidLabel = $('<label>', {'for': 'SSID', 'class': 'block mb-1 text-sm font-medium text-gray-900 dark:text-white', 'html': 'SSID'});
    const ssid = $('<input>', {'type': 'text', 'name': 'SSID', 'class': 'bg-gray-200 dark:bg-stone-900 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500', 'value': 'HANDMOTION-DEVICE', 'disabled': true,'autocomplete': false});
    ssidDiv.append(ssidLabel);
    ssidDiv.append(ssid);
    apForm.append(ssidDiv);

    const passwordDiv = $('<div>', {'class': 'mt-2 w-full'});
    const passwordLabel = $('<label>', {'for': 'PASSWORD', 'class': 'block mb-1 text-sm font-medium text-gray-900 dark:text-white', 'html': 'Password', 'textcontent': 'Password'});
    const password = $('<input>', {'type': 'password', 'name': 'PASSWORD', 'placeholder': '••••••••', 'class': 'bg-gray-200 dark:bg-stone-900 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500', 'autocomplete': false});
    passwordDiv.append(passwordLabel);
    passwordDiv.append(password);
    apForm.append(passwordDiv);

    const eigthChars = $('<p>', {
        'html': 'Password must be at least 8 characters long',
        'textcontent': 'Password must be at least 8 characters long',
        'class': 'text-sm text-red-500 font-semibold',
        'style': 'visibility: hidden;'
    });
    apForm.append(eigthChars);

    const setupButtonDiv = $('<div>', {'class': 'h-full w-full text-gray-900 rounded-lg dark:text-white space-y-2'});
    const setupButton = $('<button>', {'type': 'button', 'class': 'border border-gray-600 my-1 w-full relative flex items-center justify-center px-4 py-2 rounded-lg hover:bg-bluey-500 dark:hover:bg-bluey-700 focus:z-10 focus:ring-5 focus:ring-blue-700',});
    const setupButtonText = $('<p>', {
        'class': 'text-lg font-medium text-stone-900 dark:text-white hover:text-white',
        'html': 'Setup',
        'textcontent': 'Setup'
    });
    setupButtonDiv.append(setupButton.append(setupButtonText));
    apForm.append(setupButtonDiv);
    apContent.append(apTitle, apForm);


    const wifiContent = $('<div>', {'class': 'w-full flex flex-col items-center'});
    const wifiTitle = $('<div>', {'class': 'w-full flex flex-col'});
    const wifiTitleLabel = $('<div>', {'class': 'text-center text-xl font-bold', 'html': 'WiFi Mode', 'textcontent': 'WiFi Mode'});
    const wifiTitleDesc = $('<div>', {'class': 'text-center', 'html': 'Connect the device to a WiFi network.', 'textcontent': 'Connect the device to a WiFi network.'});
    wifiTitle.append(wifiTitleLabel, wifiTitleDesc)

    const wifiForm = $('<div>', {'class': 'flex flex-col items-center w-4/5 sm:w-80'});
    const container = $('<div>', {'class': 'h-72 max-h-72 w-full text-gray-900 rounded-lg dark:text-white space-y-2'})
    const updateButton = $('<button>', {'class': 'w-full flex items-center justify-center text-white bg-bluey-500 dark:bg-bluey-700 hover:bg-bluey-700 hover:dark:bg-bluey-500 font-bold px-3 py-2 rounded-md'});
    const updateButtonLogo = $('<svg class="h-auto w-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19.933 13.041a8 8 0 1 1-9.925-8.788c3.899-1 7.935 1.007 9.425 4.747"/><path d="M20 4v5h-5"/></g></svg>');
    const updateButtonText = $('<p>', {'html': 'Refresh', 'textcontent': 'Refresh'});
    updateButton.append(updateButtonLogo, updateButtonText);
    
    const networksDiv = $('<div>', {'class': 'h-full w-full flex flex-col items-center justify-center'});
    
    wifiForm.append(container.append(networksDiv, updateButton));
    wifiContent.append(wifiTitle, wifiForm);

    tab1Button.click(function() {
        tab1Button.addClass('border-b-2 border-bluey-500 dark:border-bluey-700 -mb-[2px] font-semibold text-bluey-600 dark:text-bluey-500');
        tab2Button.removeClass('border-b-2 border-bluey-500 dark:border-bluey-700 -mb-[2px] font-semibold text-bluey-600 dark:text-bluey-500');
        content.empty();
        tab1Button.prop('disabled', true);
        tab2Button.prop('disabled', false);
        content.append(apContent);
        refreshLabels();
    });
    tab2Button.click(function() {
        tab2Button.addClass('border-b-2 border-bluey-500 dark:border-bluey-700 -mb-[2px] font-semibold text-bluey-600 dark:text-bluey-500');
        tab1Button.removeClass('border-b-2 border-bluey-500 dark:border-bluey-700 -mb-[2px] font-semibold text-bluey-600 dark:text-bluey-500');
        content.empty();
        tab1Button.prop('disabled', false);
        tab2Button.prop('disabled', true);
        content.append(wifiContent);
        refreshLabels();
    });

    tab1Button.click();

    parent.append(backButton, tabs, content);
}

// TODO: Imprementar com o servidor
function settingsLanguage(parent) {
    const backButton = $('<button>', {'class': 'h-fit w-fit flex items-center text-white bg-bluey-500 dark:bg-bluey-700 hover:bg-bluey-700 hover:dark:bg-bluey-500 font-bold px-3 py-1 rounded-md'});
    const backButtonText = $('<span>', {'html': 'Back', 'textcontent':'Back'});
    backButton.append('<svg class="h-auto w-5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>');
    backButton.append(backButtonText);
    backButton.click(function() {
        parent.empty();
        settings(parent);
    });

    const content = $('<div>', {'class': 'w-full flex flex-col items-center'});
    const languagesButtons = $('<div>', {'class': 'text-gray-900 rounded-lg dark:text-white w-4/5 sm:w-80'});
    let selected = 'en';
    function updateButtons() {
        languagesButtons.children().each(function() {
            if($(this).attr('language') == selected) {
                $(this).addClass('focus:z-10 focus:ring-5 focus:ring-blue-700 bg-bluey-500 dark:bg-bluey-700 text-white');
                $(this).removeClass('text-stone-900 dark:text-white hover:border-black dark:hover:border-white');
                $(this).prop('disabled', true);
            } else {
                $(this).addClass('text-stone-900 dark:text-white hover:border-black dark:hover:border-white');
                $(this).removeClass('focus:z-10 focus:ring-5 focus:ring-blue-700 bg-bluey-500 dark:bg-bluey-700 text-white');
                $(this).prop('disabled', false);
            }
        });
    }

    const saveButton = $('<button>', {'class': 'mt-10 w-4/5 sm:w-80 text-center text-white bg-bluey-500 dark:bg-bluey-700 hover:bg-bluey-700 hover:dark:bg-bluey-500 font-bold px-3 py-2 rounded-md', 'html': 'Save', 'textcontent': 'Save'});

    saveButton.click(function() {});

    content.append(languagesButtons, saveButton);

    languages.forEach((language, index) => {
        const button = $('<button>', {
            'language': language.code,
            'type': 'button',
            'class': 'text-center my-1 relative w-full px-4 py-2 text-lg font-medium rounded-lg text-stone-900 dark:text-white border-2 border-transparent',
            'html': language.name
        });
        button.click(function() {
            selected = language.code;
            updateButtons();
        });
        languagesButtons.append(button);
    });

    updateButtons();
    
    parent.attr('class', 'h-full grow pl-6 lg:ml-60 lg:pl-3 pr-6 py-6 flex flex-col space-y-6 overflow-auto');
    parent.append(backButton, content);
}

// TODO: Imprementar com o servidor
function settingsReset (parent) {
    const backButton = $('<button>', {'class': 'h-fit w-fit flex items-center text-white bg-bluey-500 dark:bg-bluey-700 hover:bg-bluey-700 hover:dark:bg-bluey-500 font-bold px-3 py-1 rounded-md'});
    const backButtonText = $('<span>', {'html': 'Back', 'textcontent':'Back'});
    backButton.append('<svg class="h-auto w-5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>');
    backButton.append(backButtonText);
    backButton.click(function() {
        parent.empty();
        settings(parent);
    });

    const content = $('<div>', {'class': 'w-full flex flex-col items-center'});

    const label = $('<div>', {'class': 'text-center text-xl font-bold', 'html': 'Are you sure you want to reset the device?', 'textcontent': 'Are you sure you want to reset the device?'});
    const desc = $('<div>', {'class': 'text-center', 'html': 'This action cannot be undone.', 'textcontent': 'This action cannot be undone.'});
    const confirmButton = $('<button>', {'class': 'mt-10 w-4/5 sm:w-80 text-center text-white bg-bluey-500 dark:bg-bluey-700 hover:bg-bluey-700 hover:dark:bg-bluey-500 font-bold px-3 py-2 rounded-md', 'html': 'Sim', 'textcontent': 'Sim'});
    content.append(label, desc, confirmButton);
    parent.append(backButton, content);

    confirmButton.click(function() {});
}

function settings(parent) {
    const options = [
        {
            'name': 'Connection',
            'Subname': 'Tap the button to customize the connection.',
            'icon': '<svg class="h-auto w-16 md:w-20 lg:w-24 text-blue-500 dark:text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.06 10.06c.51.51 1.32.56 1.87.1c4.67-3.84 11.45-3.84 16.13-.01c.56.46 1.38.42 1.89-.09c.59-.59.55-1.57-.1-2.1c-5.71-4.67-13.97-4.67-19.69 0c-.65.52-.7 1.5-.1 2.1zm7.76 7.76l1.47 1.47c.39.39 1.02.39 1.41 0l1.47-1.47c.47-.47.37-1.28-.23-1.59a4.28 4.28 0 0 0-3.91 0c-.57.31-.68 1.12-.21 1.59zm-3.73-3.73c.49.49 1.26.54 1.83.13a7.064 7.064 0 0 1 8.16 0c.57.4 1.34.36 1.83-.13l.01-.01c.6-.6.56-1.62-.13-2.11c-3.44-2.49-8.13-2.49-11.58 0c-.69.5-.73 1.51-.12 2.12z"/></svg>',
            'page': settingsConnection
        },
        /*{
            'name': 'Servo Motor',
            'Subname': 'Tap the button to customize the servo motor.',
            'icon': '<svg class="h-auto w-16 md:w-20 lg:w-24 text-blue-500 dark:text-blue-600" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M18,9.5V8H17V7a2,2,0,0,0-2-2H4A2,2,0,0,0,2,7v7a2,2,0,0,0,2,2H15a2,2,0,0,0,2-2V13h1V11.5h4v-2ZM14,14H5V13h9Zm0-2H5V11h9Zm0-2H5V9h9Zm0-2H5V7h9ZM3,17H16v2H3Z"/><rect width="24" height="24" fill="none"/></svg>',
            'page':settingsLanguage
        },*/
        {
            'name': 'Language',
            'Subname': 'Tap the button to change the language.',
            'icon': '<svg class="h-auto w-16 md:w-20 lg:w-24 text-blue-500 dark:text-blue-600" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>',
            'page':settingsLanguage
        },
        {
            'name': 'Reset',
            'Subname': 'Reset all settings to default.',
            'icon': '<svg class="h-auto w-16 md:w-20 lg:w-24 text-blue-500 dark:text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M6.03 2.47a.75.75 0 0 1 0 1.06L4.81 4.75H11A6.25 6.25 0 1 1 4.75 11a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 0 11 6.25H4.81l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0Z"/></svg>',
            'page': settingsReset
        }
    ];

    let i = 0;
    let row;
    options.forEach(option => {
        i++;
        if (i > 2) i = 1;
        if (i == 1) {
            row = $('<div>', {'class': 'flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0'});
            parent.append(row);
        }

        const button = $('<button>', {'class': 'w-full flex group rounded-3xl p-4 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 border border-transparent hover:border-gray-400 dark:hover:bg-gray-800 dark:hover:border dark:hover:border-gray-600'});
        const buttonIcon = $('<div>', {'class': 'rounded-xl flex justify-center items-center p-1 bg-gray-200 dark:bg-gray-800 group-hover:bg-gray-300 dark:group-hover:bg-gray-900'});
        buttonIcon.append(option.icon);

        const buttonTexts = $('<div>', {'class': 'ml-6 flex flex-col text-left'});
        const buttonTitle = $('<span>', {'class': 'xl:text-2xl lg:text-xl md:text-xl text-xl font-extrabold', 'textcontent': option.name, 'html': option.name});
        const buttonSubtitle = $('<span>', {'textcontent': option.Subname, 'html': option.Subname});
        buttonTexts.append(buttonTitle, buttonSubtitle);

        button.click(function() {
            parent.empty();
            option.page(parent);
            refreshLabels();
        });

        button.append(buttonIcon, buttonTexts);
        row.append(button);
    });

    parent.attr('class', 'h-full grow pl-6 lg:ml-60 lg:pl-3 pr-6 py-6 flex flex-col space-y-6 overflow-auto');
    refreshLabels();
}

let selectedPage = null;
function sidebarElement(parent) {
    const aside = $('<aside>', {'class': 'h-full w-60 z-50 fixed top-0 left-0 pt-14 -translate-x-full overflow-y-auto transition-transform duration-200 lg:left-0 lg:translate-x-0 lg:bg-transparent ps'});

    const asideContent = $('<div>', {'class': 'bg-gray-200 rounded-2xl dark:bg-gray-950 w-full h-full flex flex-col pb-6'});
    const buttonListOuter = $('<div>', {'class': 'items-center block w-full max-h-screen overflow-auto h-sidenav grow basis-full'});
    const buttonList = $('<div>', {'class': 'flex flex-col pl-0 mb-0'});

    const buttons = [
        {
            'name': 'Home',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>',
            'content': home
        },
        {
            'name': 'Statistics',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg>',
            'content': statistics
        },
        {
            'name': 'Settings',
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>',
            'content': settings
        }
    ];

    if (selectedPage === null) {
        selectedPage = buttons[0].name;
        buttons[0].content(parent);
    }

    function updateButtons() {
        buttonList.children().each(function() {
            if($(this).attr('pageIndex') === selectedPage) {
                $(this).removeClass('hover:bg-gray-300 dark:hover:bg-gray-800');
                $(this).addClass('bg-gray-100 dark:bg-gray-700');

                $(this).find('div').addClass('text-white bg-gradient-to-tl from-bluey-950 to-bluey-500 dark:bg-gray-800');
                $(this).find('span').addClass('font-medium');
                $(this).prop('disabled', true);
            } else {
                $(this).removeClass('bg-gray-100 dark:bg-gray-700');
                $(this).addClass('hover:bg-gray-300 dark:hover:bg-gray-800');

                $(this).find('div').removeClass('text-white bg-gradient-to-tl from-bluey-950 to-bluey-500 dark:bg-gray-800');
                $(this).find('span').removeClass('font-medium');
                $(this).prop('disabled', false);
            }
        });
    }

    buttons.forEach((buttonData) => {
        const button = $('<button>', {'class': 'mt-3 group py-2 drop-shadow-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg px-4 hover:bg-gray-300 dark:hover:bg-gray-800', 'pageIndex': buttonData.name});
        const buttonIcon = $('<div>', {'class': 'drop-shadow-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center bg-white xl:p-2 text-center stroke-0 dark:bg-gray-900'});
        const buttonText = $('<span>', {'class': 'ml-1 pointer-events-none', 'textcontent': buttonData.name, 'html': buttonData.name});
        updateButtons();

        button.click(function() {
            selectedPage = buttonData.name;

            parent.fadeOut("slow", () => {
                parent.children().remove();
            });

            updateButtons();

            parent.promise().done(function () {
                parent.fadeIn("slow")
                buttonData.content(parent);
                
            });
        });

        buttonIcon.append(buttonData.icon);

        button.append(buttonIcon, buttonText);
        buttonList.append(button);
    });

    const statusDiv = $('<div>', {'class': 'mx-4 flex flex-col items-center space-y-5'});
    const statusDivider = $('<hr>', {'class': 'h-0.5 w-full mt-0 bg-gradient-to-r from-transparent via-black/40 to-transparent'});
    const status = $('<div>', {'class': 'flex items-center justify-center w-fit bg-gray-300 dark:bg-gray-900 rounded-full px-6 py-2 drop-shadow-lg'});
    const statusIcon = $('<span>', {'class': 'w-2 h-2 bg-green-500 rounded-badge mr-2'});
    const statusText = $('<span>', {'html': 'Connected', 'textcontent': 'Connected'});

    statusDiv.append(statusDivider, status.append(statusIcon, statusText));
    aside.append(asideContent.append(buttonListOuter.append(buttonList), statusDiv));

    return aside;
}

let language; 
$(document).ready(function() {
    const body = $('body');
    body.addClass("h-screen w-full bg-gray-200 dark:bg-gray-950");

    const loading = loadingScreen();
    body.append(loading);
    $.ajax({
        url: "/get/language",
        method: "GET",
        dataType: "json",
        async: false,
        success: function (data) { language = data['Language'] },
        error: function (error) { language = 'en'; }
    });

    $.ajax({
        url: "/get/control",
        method: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
            control["Little finger"] = data["Little finger"];
            control["Ring finger"] = data["Ring finger"];
            control["Middle finger"] = data["Middle finger"];
            control["Index finger"] = data["Index finger"];
            control["Thumb"] = data["Thumb"];
            control["Speed"] = data["Speed"];
        }
    });

    $.ajax({
        url: "/get/statistics",
        method: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
            ESPstatistics["SDK Version"] = data["SDK Version"];
            ESPstatistics["WiFi Mode"] = data["WiFi Mode"];
            ESPstatistics["MAC Address"] = data["MAC Address"];
            ESPstatistics["Temperature"] = Number((data["Temperature"]).toFixed(2));
            ESPstatistics["Uptime"] = data["Uptime"];
            ESPstatistics["Free Heap"] = data["Free Heap"];
            ESPstatistics["Total Heap"] = data["Total Heap"];
            ESPstatistics["Flash Size"] = data["Flash Size"];
            ESPstatistics["Available Size"] = data["Available Size"];
        },
    });

    const app = $('<div>', {'id': 'app','class': 'h-screen w-full'});

    // Header
    const header = headerElement();
    app.append(header);

    const main = $('<main>', {'class': 'text-gray-900 dark:text-white flex overflow-hidden',});

    const pageContent = $('<div>', {'class': 'h-full grow pl-6 lg:ml-60 lg:pl-3 pr-6 py-6 overflow-auto grid gap-6'});

    const sidebar = sidebarElement(pageContent);
    main.append(sidebar, pageContent);

    app.append(main);

    wait(1000).then(() => {
        loading.fadeOut("slow", () => {
            loading.remove();
            body.append(app);
            app.fadeIn("slow");
            langSelectChange(language);
            main.css('min-height', `calc(100vh - ${header.outerHeight()}px)`);
            main.css('height', `calc(100vh - ${header.outerHeight()}px)`);
            main.css('max-height', `calc(100vh - ${header.outerHeight()}px)`);
        });
    });
});
const el = document.getElementById('pagin');

const pagination = {
    currentPage: 1,
    pageLength: 7,
    // totRev: 0,
    render: function () {
        let totRev = document.getElementById('rpp').value;
        this.totalRecords = 29;
        let pages = Math.ceil(this.totalRecords / this.pageLength);
        this.pages = pages;

        let buttons = '';
        buttons += `
            <button class="pagination-btn prev"
                onclick="pagination.prev(this)"
                type="button">
                prev ${totRev} pages
            </button>
        
            <button class="pagination-btn next"
                onclick="pagination.next(this)"
                type="button">
                next ${totRev} pages
            </button><p>
        `;
        el.innerHTML= buttons;

    }



    /*getButton: function (text) {
        let classNames = 'pagination-btn';
        if (this.currentPage == text) {
            classNames += ' current-page';
        }
        let html = `
            <button id="btn-${text}"
                class="${classNames}"
                type="button"
<!--                onclick="pagination.gotoPage(this, ${text})"-->
            >${text}
            </button>
        `;

        return html;
    },
    next: function (btn) {
        if (this.currentPage > this.pages - 1) return;
        this.currentPage = this.currentPage + 1;
        let currentPageBtn = document.getElementById(`btn-${this.currentPage}`);
        this.gotoPage(currentPageBtn, this.currentPage);

    },
    prev: function (btn) {
        if (this.currentPage == 1) return;
        this.currentPage = this.currentPage - 1;
        let currentPageBtn = document.getElementById(`btn-${this.currentPage}`);
        this.gotoPage(currentPageBtn, this.currentPage);

    },
    gotoPage: function (btn, pageNo) {
        this.currentPage = pageNo;
        let paginationButtons = document.querySelectorAll(".pagination-btn");
        for(let i = 0; i < paginationButtons.length; i++) {
            paginationButtons[i].classList.remove("current-page");
        }
        btn.classList.add("current-page");

        let pagedData = todoService.getPagedData(pageNo, this.pageLength);

        todoApp.render(pagedData);
    },
    gotoLastPage: function () {
        this.currentPage =  this.pages;
        let currentPageBtn = document.getElementById(`btn-${this.currentPage}`);
        this.gotoPage(currentPageBtn, this.currentPage);
    }*/
};

pagination.render();
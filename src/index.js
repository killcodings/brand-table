import './style.scss';

(function () {
  let containerPlus = document.querySelector('.table');
  let moreInText = document.querySelectorAll(
    '.table .more-info .more-info__text'
  );
  let link = document.querySelectorAll('.link');

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
      if (moreInText[i].innerHTML == 'More info') {
        moreInText[i].textContent = 'Hide info';
      } else if (moreInText[i].innerHTML == 'Hide info') {
        moreInText[i].textContent = 'More info';
      }
    });
  }
  containerPlus.addEventListener('click', function (e) {
    console.log(e.target);
    if (
      (e.target.classList.contains('link') ||
        e.target.classList.contains('more-info__text')) &&
      !e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains(
        'active'
      )
    ) {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
        'active'
      );
      return;
    } else if (
      (e.target.classList.contains('link') ||
        e.target.classList.contains('more-info__text')) &&
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains(
        'active'
      )
    ) {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove(
        'active'
      );
      e.target.parentElement.parentElement.parentElement.parentElement.classList.remove(
        'active'
      );
      return;
    } else if (
      e.target.classList.contains('link') &&
      e.target.parentElement.parentElement.parentElement.parentElement.classList.contains(
        'active'
      )
    ) {
      e.target.parentElement.parentElement.parentElement.parentElement.classList.remove(
        'active'
      );
    }
  });
  function addBlock() {
    if ((window.innerWidth || document.body.clientWidth) <= 768) {
      let delPay = document.querySelectorAll('.pay-wrap');
      delPay.forEach((block) => block.remove());
      let morePay = document.querySelectorAll('.more .more-info');
      morePay.forEach(
        (block) =>
          (block.innerHTML += `
        <div class="pay-wrap">
          <span class="i-pay _icon-masterrcard"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span><span class="path4"></span
          ></span>
          <span class="i-pay _icon-discover"
            ><span class="path1"></span><span class="path2"></span
          ></span>
          <span class="i-pay _icon-amex"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span
          ></span>
          <span class="i-pay _icon-maestro"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span><span class="path4"></span
            ><span class="path5"></span><span class="path6"></span
            ><span class="path7"></span><span class="path8"></span
            ><span class="path9"></span><span class="path10"></span
          ></span>
          <span class="i-pay _icon-union-pay"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span><span class="path4"></span
          ></span>
          <span class="i-pay _icon-jcb"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span
          ></span>
        </div>
        `)
      );
    }
  }
  window.onload = function () {
    addBlock();
    window.onresize = function resize() {
      addBlock();
    };
  };
})();

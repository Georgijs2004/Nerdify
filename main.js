const anchors = document.querySelectorAll('.anchors_nav-bar a');
const yOffset = -0;

for (anchor of anchors) {
    if (anchor) {
      anchor.addEventListener('click', function(e){
        e.preventDefault();
        anchorId = this.getAttribute('data-redir');
        scrollToElemenet =  document.querySelector(anchorId).getAttribute('Id')
        const rect = document.getElementById(scrollToElemenet).getBoundingClientRect();
        const y = rect.top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
     })
   }
}
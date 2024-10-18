/**
 * @package     Joomla.Site
 * @subpackage  Templates.cassiopeia
 * @copyright   (C) 2020 Open Source Matters, Inc. <https://www.joomla.org>
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @since       4.0.0
 */
document.addEventListener("DOMContentLoaded", () => {
  const allMenus = document.querySelectorAll("ul.mod-menu_dropdown-metismenu");
  allMenus.forEach((menu) => {
    const mm = new MetisMenu(menu, {
      triggerElement: "button.mm-toggler",
    });
  });

  /*
    Show / open active
  */
  const mainmenu = document.querySelector("#nav-mainmenu");
  const allActiveLi = mainmenu.querySelectorAll("li.current.active, li.level-2.active");
  const activeLi = allActiveLi[allActiveLi.length - 1];

  if (document.body.contains(activeLi)) {
    const parentUl = activeLi.parentElement;
    const grandParentLi = parentUl.parentElement;
    grandParentLi.classList.add("mm-active");
    parentUl.classList += " show mm-show";
  }
});

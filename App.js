 Window.D
 // notification content
  const notificationHeaders = document.querySelectorAll(".notification-content header");
  const unreadMessages = document.querySelectorAll(".unread");
  const notificationCounter = document.querySelector(".notification-counter");
 
  function openMessage(e) {
    var message = e.target.nextElementSibling
    var header = e.target.parentElement
    e.target.parentElement.classList.remove("unread");
    
    if(header.contains(message)) {
        message.classList.toggle("active-message");
      }
      notificationCount();
      console.log(message);
  }
window.addEventListener("DOMContentLoaded",notificationCount);
  function notificationCount() {
    var unreadMessagesLength = document.querySelectorAll(".unread").length
    notificationCounter.innerHTML = unreadMessagesLength

  }
  function clearNotifications() {
    unreadMessages.forEach(unreadMessage => {
      unreadMessage.classList.remove("unread");
    });
    notificationCount();

  }


  notificationHeaders.forEach(notificationHeader => {
    notificationHeader.addEventListener("click",openMessage);
  });


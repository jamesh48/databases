var MessageView = {
  render: _.template(

    `<!--
    -->
    <div class='chat'>
    <div class = "username-div">
      <p class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"
      data-username="<%- username %>">
      <%- username %>
        </p>
    </div>
      <div class='message-div'>
        <h4 class = 'message'> <%- text %> </h4>
      </div>
      <div class='roomname-div'>
        <h6 class = 'roomname'> <%- roomname %> </h6>
      </div>
      <div class='created-at-div'>
       <h6 class = 'created-at'> <%- createdAt %> </h6>
      </div>
    </div>
    <!--
    -->
    `)

  // ,
  // renderFriend: _.template(
  //   `<div class='chat'>
  //     <div class ='username-div'>
  //       <a href='#' onclick='Friends.toggleStatus(event)' class = 'friend'> <%- username %> </a>
  //     </div>
  //     <div class='message-div'>
  //       <h4 class = 'message'> <%- text %> </h4>
  //     </div>
  //     <div class='roomname-div'>
  //       <h6 class = 'roomname'> <%- roomname %> </h6>
  //     </div>
  //     <div class='created-at-div'>
  //       <h6 class = 'created-at'> <%- createdAt %> </h6>
  //     </div>
  //   </div>`)
};
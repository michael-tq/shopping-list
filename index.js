$(function() {
    
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        let submitInput = $('#shopping-list-entry').val();
        console.log(submitInput);
        $('ul').append(
        `<li> 
        <span class="shopping-item">${submitInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
      $('#shopping-list-entry').val('');
    })
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(event.currentTarget).parent().parent().remove();
    });
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        $(event.currentTarget).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked');
    })
});
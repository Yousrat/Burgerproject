$(document).ready(function() {

    // Adding a new item to the database
    $("#add-new-burger").on("click", function() {
        var newBurger = {
            addNewBurger: $("#new-burger").val().trim() 
        };
        $.ajax({
            method: "POST",
            url: "/submit",
            data: newBurger
        }).done(function() {
            //window.location.href = "/items-by-lender";
        });
    });
};
    // Deleting an item from the database
//     $(".delete-item").on("click", function() {
//         var deleteId = {
//             itemId: $(".delete-item").attr("delete-item-id")
//         };

//         $.ajax({
//             method: "DELETE",
//             url: "/delete-item",
//             data: deleteId
//         }).done(function() {
//             window.location.href = "/items-by-lender";
//         });
//     });

//     // Requesting and setting borrower's ID to the database
//     var itemRequestId;
//     $(".request-item").on("click", function() {
//         var request = {
//             itemId: $(this).attr("request-item-id")
//         };
//         itemRequestId = request.itemId;
//         $.ajax({
//             method: "PUT",
//             url: "/set-borrower",
//             data: request
//         }).done(function() {
//             window.location.href = "/all-items";
//         });
//     });

//     // Sending mail to the lender
//     $(".send-mail").on("click", function() {
//         var mail = {
//             numDays: $("#num-days").val(),
//             mailMessage: $("#email-message").val(),
//             itemId: itemRequestId
//         };
//         $.ajax({
//             method: "POST",
//             url: "/send-mail",
//             data: mail
//         }).done(function() {
//             window.location.href = "/all-items";
//         });
//     });

//     var itemBorrowerId;
//     $(".reply-borrower").on("click", function() {
//         itemBorrowerId = $(this).attr("borrower-id")
//     });

//     // Sending mail to the borrower
//     $(".send-reply").on("click", function() {
//         var reply = {
//             mailMessage: $("#reply-email").val(),
//             borrowerId: itemBorrowerId
//         };
//         $.ajax({
//             method: "POST",
//             url: "/send-reply",
//             data: reply
//         }).done(function() {});
//     });
// });
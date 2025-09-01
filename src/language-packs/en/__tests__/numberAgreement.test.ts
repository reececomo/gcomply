import { numberAgreement } from "../numberAgreement";

describe( "numberAgreement", () =>
{
    test.each([
        ["You have 5 new message.",         "You have 5 new messages."],
        ["You have 1 new messages.",        "You have 1 new message."],
        ["3 file uploaded successfully.",   "3 files uploaded successfully."],
        ["1 files uploaded successfully.",  "1 file uploaded successfully."],
        ["Showing 20 result.",              "Showing 20 results."],
        ["Showing 1 results.",              "Showing 1 result."],
        ["2 item in your cart",             "2 items in your cart"],
        ["1 items in your cart",            "1 item in your cart"],
        ["4 friend request(s) pending",     "4 friend requests pending"],
        ["1 friend request(s) pending",     "1 friend request pending"],
        ["8 notification",                  "8 notifications"],
        ["1 notifications",                 "1 notification"],
        ["6 task completed",                "6 tasks completed"],
        ["1 tasks completed",               "1 task completed"],
        ["12 comment added",                "12 comments added"],
        ["1 comments added",                "1 comment added"],
        ["3 hour ago",                      "3 hours ago"],
        ["1 hours ago",                     "1 hour ago"],
        ["Your balance is 25 dollar.",      "Your balance is 25 dollars."],
        ["Your balance is 1 dollars.",      "Your balance is 1 dollar."],
        ["9 user online",                   "9 users online"],
        ["1 users online",                  "1 user online"],
        ["7 document available",            "7 documents available"],
        ["1 documents available",           "1 document available"],
        ["4 error found",                   "4 errors found"],
        ["1 errors found",                  "1 error found"],
        ["10 unread email",                 "10 unread emails"],
        ["1 unread emails",                 "1 unread email"],
        ["5 upcoming event",                "5 upcoming events"],
        ["1 upcoming events",               "1 upcoming event"],
        ["2 attachment included",           "2 attachments included"],
        ["1 attachments included",          "1 attachment included"],
        ["14 item saved",                   "14 items saved"],
        ["1 items saved",                   "1 item saved"],
        ["6 bookmark added",                "6 bookmarks added"],
        ["1 bookmarks added",               "1 bookmark added"],
        ["3 attempt remaining",             "3 attempts remaining"],
        ["1 attempts remaining",            "1 attempt remaining"],
        ["15 minute left",                  "15 minutes left",],
        ["1 minutes left",                  "1 minute left"],
        ["There are 1 people in queue",     "There is 1 person in queue"],
        ["There is 4 person in queue",      "There are 4 people in queue"],

        // multi-phrase cases
        [
            "1 new message, 3 new friend requests",
            "1 new message, 3 new friend requests"
        ],
        [
            "1 new messages, 3 new friend request",
            "1 new message, 3 new friend requests"
        ],
        [
            "1 new message, 3 new friend request",
            "1 new message, 3 new friend requests"
        ],
        [
            "You have 1 new post and 1 new friend requests",
            "You have 1 new post and 1 new friend request"
        ],
        [
            "4 new email, 5 new friend requests",
            "4 new emails, 5 new friend requests"
        ],
        [
            "2 new private message, 1 new friend requests",
            "2 new private messages, 1 new friend request"
        ],
    ])( '"%s" is corrected to "%s"', (input, expected) =>
    {
        expect(numberAgreement(input)).toEqual(expected);
    });
});

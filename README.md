# Lottery API

- Sell lottery ticket
- Update lottery ticket
- Delete lottery ticket
- Get all tickets
- Get ticket by id
- Bulk buy (User can buy multiple tickets)
- Raffle draw

## Ticket:

- Number (Unique)
- Username
- Price
- Timestamp

##  Routes

| ID  | Routes  | Methods | Descriptions  |
| --- | ------- | ------- | ------------- |
| 1 | /tickets/sell | POST | Create ticket |
| 2 | /tickets/bulk | POST | Bulk sell ticket |
| 3 | /tickets/ | GET | Get all tickets |
| 4 | /tickets/t/:ticketId | GET | Find single ticket |
| 5 | /tickets/t/:ticketId | PATCH | Update ticket by id |
| 6 | /tickets/t/:ticketId | DELETE | Delete ticket by id |
| 7 | /tickets/u/:username | GET | Find tickets for a given user |
| 8 | /tickets/u/:username | PATCH | Update ticket for a given user |
| 9 | /tickets/u/:username | DELETE | Delete all tickets for a given user |
| 10 | /tickets/draw | GET | Get all winners |
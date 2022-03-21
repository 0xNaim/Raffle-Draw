const Ticket = require('../models/Ticket');

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * Create & save a new ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * Create multiple ticket for a single user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }
  // Return all available tickets
  find() {
    return this.tickets;
  }

  /**
   * Find ticket by ID
   * @param {string} ticketId
   * @returns {Ticket}
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       *
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );
    return ticket;
  }

  /**
   * Find all tickets for a given user
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  findByUsername(username) {
    const tickets = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === username
    );
    return tickets;
  }

  /**
   * Update ticket info by ID
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @returns {Ticket}
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();

    return ticket;
  }

  /**
   *
   * @param {string} username
   * @param {string} ticketBody
   * @returns {Ticket}
   */
  updateByUsername(username, ticketBody) {
    const ticket = this.findByUsername(username);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();

    console.log('updateByUsername', ticket);

    return ticket;
  }

  /**
   * Delete single ticket
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    }
  }

  /**
   * Find winners
   * @param {number} winnerCount
   * @return {Array<Ticket>}
   */
  draw(winnerCount) {
    let winnerIndexes = new Array(winnerCount);
    let index = 0;

    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);
      if (!winnerIndexes.includes(winnerIndex)) {
        winnerIndexes[index++] = winnerIndex;
        continue;
      }
    }

    const winners = winnerIndexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();

module.exports = myDB;

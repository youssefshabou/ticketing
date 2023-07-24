import { Publisher, Subjects, TicketCreatedEvent } from '@youshtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

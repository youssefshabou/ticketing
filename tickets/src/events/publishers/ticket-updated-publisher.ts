import { Publisher, Subjects, TicketUpdatedEvent } from '@youshtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

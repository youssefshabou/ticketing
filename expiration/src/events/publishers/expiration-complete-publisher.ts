import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@youshtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

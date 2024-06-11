import styles from './ClientCard.module.css';
import quotationMarks from '../assets/quotation-marks.svg';
export interface Client {
  client_name: string;
  company_name: string;
  url: string;
  image: string;
  client_message: string;
  order: number;
  hidden: boolean;
  background_color: string;
  position: string;
}

interface ClientCardProps {
  client: Client;
}
export default function ClientCard({ client }: ClientCardProps) {

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img className={styles.quotationMarks} src={quotationMarks} alt="Quotation marks" />
        <div className={styles.client__message}>
          { client.client_message }
        </div>
        <div className={styles.client__container}>
          <img
            style={{ backgroundColor: client.background_color }}
            className={styles.client__image}
            src={client.image}
            alt="Client's logo"
          />
          <div className={styles.client__info}>
            <div className={styles.client__name}>
              { client.client_name }
            </div>
            <div className={styles.client__position}>
              { client.position }
            </div>
            <div className={styles.client__company}>
              { client.company_name }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import styles from './Scenes.module.scss';
import Card from '../card/Card.jsx';
import { Grid } from '@mui/material';

export default function Scenes({ cards }) {
  return (
    <div className={`${styles['scenes-container']}`}>
      <Grid container width={802} height={403}>
        {cards.map((card, idx) => (
          <Grid
            item
            xs={4}
            md={4}
            width={267}
            height={201}
            sx={{ backgroundColor: '#EBE6F7' }}
          >
            <Card key={idx} iconUrl={card.iconUrl} outlined={card.outlined} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

import styles from './Scenes.module.scss';
import Card from '../card/Card.jsx';
import { Grid } from '@mui/material';

export default function Scenes({ cards }) {
  return (
    <div className={`${styles['scenes-container']}`}>
      <Grid container width={802} height={403} display={'flex'} justifyContent={'center'} >
        {cards.map((card, idx) => (
          <Grid
          p={2}
            item
            xs={4}
            md={4}
            maxWidth={267}
            minHeight={201}
          >
            <Card key={idx} iconUrl={card.iconUrl} outlined={card.outlined} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}



import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {useRouter} from 'next/router';

function MeetupItem(props) {
  const router= useRouter();
  const showDetailPage =()=>{
    router.push('/'+ props.id);
  };

  return (
    <li className={classes.item} onClick={showDetailPage}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
     
      </Card>
    </li>
  );
}

export default MeetupItem;

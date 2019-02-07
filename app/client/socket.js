import io from 'socket.io-client';
import { webserver  } from '../../helperfunction'

const socket = io(`${webserver}`);

export default socket;

import User from './user.js';
import Room from './room.js';
import Hotel from './hotel.js';
import Reservation from './reservation.js';

Hotel.hasMany(Room, { foreignKey: 'hotelId', as: 'rooms' });
Room.belongsTo(Hotel, { foreignKey: 'hotelId', as: 'hotel' });

 User.hasMany(Reservation);
 Reservation.belongsTo(User);

 User.belongsToMany(Room, { 
   through: { 
    model: Reservation, 
    unique: false }  
 });
 Room.belongsToMany(User, { 
   through: { 
    model: Reservation, 
    unique: false }  
 });

Hotel.sync({
  //  force: true,
});

User.sync({
  // force: true,
}); 

Room.sync({
   //force: true,
});

Reservation.sync({
 // force: true,
});

export { User, Room, Hotel, Reservation, };
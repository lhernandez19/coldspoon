function StoreItem(record, removeMethod){
    // list of possible values (enum)
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'};

    // unique id for each library item
    record.id = Math.floor(Math.random() * 10e16);

    // decorate existing objects with LI functionality
    record.status = STATUSES.CHECKED_IN;


    record.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }

    record.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    record.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }


    record.remove = removeMethod || function(){};

    return record;
}

function Gelato(name, description, price){
    this.name = name || 'Default Title';
    this.description = description || '';
    this.price = price;
}

function Sorbetto(title, artist, trackCount){
    this.title = title || 'Default Title';
    this.artist = artist || '';
    this.trackCount = trackCount;
}



export {StoreItem, Gelato, Sorbetto};
// Address Class dependiente de Bee Class
class Address{
    constructor(street, suite, city, zipcode, geo){
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        // class Geo dentro de class Address
        this.geo = geo;
        

    }
}
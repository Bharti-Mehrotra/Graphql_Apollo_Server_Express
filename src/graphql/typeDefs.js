const {gql} = require('apollo-server-express');
export const typeDefs = gql`
    type Friend{
       id:ID
       firstName:String
       lastName:String
       gender:Gender
       language:String
       age:Int
       email: String
    }
    
    type Series {
        id:ID
        seriesName:String
        year:Int
        rating:Rating
    }
    type Trip{
        id:ID
        place:String
        amount:Int
        arrivalDate:String
        departureDate:String
        noOfdays:Int
        noOfFriends:Int
     }

    enum Rating{
        ONE
        TWO
        THREE
    }

    enum Gender{
        MALE
        FEMALE
        OTHER
    }

    input SeriesInput{
        id:ID
        seriesName:String
        year:Int
        rating:Rating
    }

    input FriendInput{
        id:ID
        firstName:String
        lastName:String
        gender:Gender
        language:String
        age:Int
        email: String
    }
    input TripInput{
        id:ID
        place:String
        amount:Int
        arrivalDate:String
        departureDate:String
        noOfdays:Int
        noOfFriends: Int
    }

    type Query{
        getAllFriend:[Friend]
        findASeries(id:ID):Series
        getAllTrip:[Trip]
    }

    type Mutation{
        createFriend(input:FriendInput):Friend
        addASeries(series:SeriesInput):Series
        deleteFriend(id:ID!):Boolean
        deleteTrip(id:ID!):Boolean
        editSeries(ID:ID!,series:SeriesInput):Boolean
        editTrip(ID:ID!,trip:TripInput):Boolean
        createTrip(input:TripInput):Trip
    }
`;

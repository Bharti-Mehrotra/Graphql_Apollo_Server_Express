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
    type Group{
        id:ID
        name:String
        friend:[Friend]
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
    input GroupInput{
        id:ID
        name:String
        friend:[FriendInput]
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
        getAllGroup:[Group]
        findAllSeries:[Series]
        getSeriesById(id:ID):Series
        getFriendById(id:ID):Friend
        getTripById(id:ID):Trip
        getGroupById(id:ID):Group
        getAllTrip:[Trip]
    }

    type Mutation{
        createFriend(input:FriendInput):Friend
        addASeries(input:SeriesInput):Series
        createGroup(input:GroupInput):Group
        deleteFriend(id:ID!):Boolean
        deleteGroup(id:ID!):Boolean
        deleteTrip(id:ID!):Boolean
        editSeries(ID:ID!,series:SeriesInput):Boolean
        editTrip(ID:ID!,trip:TripInput):Boolean
        createTrip(input:TripInput):Trip
    }
`;

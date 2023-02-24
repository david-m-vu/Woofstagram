import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
      <StatusBar style="auto"/>
      <HomeScreen />
    </SafeAreaView>
  );
}

const Avatar = (props) => (
  <Image
    style={styles.avatar}
    source={{ uri: props.url }}
  />
);

const Heading = (props) => (
  <Text style={styles.heading}>
    {props.children}
  </Text>
);

const Title = (props) => (
  <Text style={styles.title}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  avatar: {
    borderRadius: "50%" ,
    width: 64,
    height: 65.97
  },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "Kanit",
    lineHeight: 22,
    color: "#08060B",
    marginLeft: 10,
    marginTop: 10
  },
  title: {
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 14.4
  },
});

// App-specific components

const WoofCard = (props) => (
  <View style={woofCardStyles.card}>
    <Avatar url={props.avatar}/>
    <View style={{textAlign: "center"}}>
      <Title style={woofCardStyles.title}>{props.name}</Title>
    </View>
  </View>
);

const woofCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    border: 1,
    borderRadius: 12,
    width: 88,
    height: 112,
    padding: 12,
    flex: 1,
    justifyContent: "center",
    gap: 10,
    margin: 8,
    shadowColor: "#E7E3EB",
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 0.3}
  },
  title: {
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 14.4,
  },
});

const WoofPost = (props) => (
  <View style={woofPostStyles.layout}>
    <Image style={woofPostStyles.image} source={{ uri: props.image }} />
    <View style={woofPostStyles.content}>
      <Text style={woofPostStyles.title}>{props.title}</Text>
      <Text numberOfLines={2} style={woofPostStyles.description}>{props.description}</Text>
    </View>
  </View>
);

const woofPostStyles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    margin: 10
  },
  image: {
    flex: 1,  
    borderRadius: 12,
    marginRight: 12 ,
    height: 80
  },
  content: {
    flex: 2,
    justifyContent: "center"
  },
  title: {
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 14.4,
    marginBottom: 8
  },
  description: {
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    color: "#280D5F"
  },
});

// The screen rendering everything
const HomeScreen = () => (
  <ScrollView style={{ backgroundColor: "#E7E3EB"}}>
    <Heading>John Denero be like</Heading>
    <ScrollView horizontal={true} style={{ padding: 2}}>
      {data.woofs.map((woof) => {
        return <WoofCard avatar={woof.avatar} name={woof.name} />
      })}
    </ScrollView>

    <Heading>New Woof Posts</Heading>
    {data.posts.map((post) => {
      return <WoofPost title={post.title} description={post.description} image={post.image}/>
    })}
    

  </ScrollView>
);

const data = {
  woofs: [
    {
      id: 'woof-1', 
      name: 'Rex', 
      avatar: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=648&q=80',
      caretaker: 'Victor Grabarczyk',
      source: 'https://unsplash.com/photos/x5oPmHmY3kQ',
    },
    {
      id: 'woof-2', 
      name: 'Ball', 
      avatar: 'https://images.unsplash.com/photo-1585584114963-503344a119b0?auto=format&fit=crop&h=64&q=80',
      caretaker: 'Tatiana Rodriguez',
      source: 'https://unsplash.com/photos/J40C1k6Fut0',
    },
    {
      id: 'woof-3', 
      name: 'Happy', 
      avatar: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&h=64&q=80',
      caretaker: 'Marliese Streefland',
      source: 'https://unsplash.com/photos/2l0CWTpcChI',
    },
    {
      id: 'woof-4',
      name: 'Fluffy',
      avatar: 'https://images.unsplash.com/photo-1554956615-1ba6dc39921b?auto=format&fit=crop&h=64&q=80',
      caretaker: 'Nick Fewings',
      source: 'https://unsplash.com/photos/rMKXLAIa2OY',
    },
    {
      id: 'woof-5',
      name: 'Spirit',
      avatar: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?auto=format&fit=crop&h=64&q=80',
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/uNNCs5kL70Q',
    },
  ],
  posts: [
    {
      id: 'post-1',
      image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=967&q=80',
      title: 'Happy Woofs',
      description: 'How to keep your woof health and happy. We\'ve asked some of the best experts out there.',
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/UtrE5DcgEyg',
    },
    {
      id: 'post-2',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=850&q=80',
      title: 'Woofs & friends',
      description: 'Best friends are important for humans, but also for dogs.',
      caretaker: 'Krista Mangulsone',
      source: 'https://unsplash.com/photos/9gz3wfHr65U',
    },
    {
      id: 'post-3',
      image: 'https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?auto=format&fit=crop&w=634&q=80',
      title: 'Good Woofs',
      description: 'A good woof is a woof that brings joy. Here are a few tips to let your woof behave.',
      caretaker: 'Olia Nayda',
      source: 'https://unsplash.com/photos/f6v_Q0WXEK8',
    },
    {
      id: 'post-4',
      image: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=1100&q=80',
      title: 'Wild Woofs',
      description: 'In some parts of the world, wild woofs are very common. Learn how to interact in a nice way.',
      caretaker: 'Anoir Chafik',
      source: 'https://unsplash.com/photos/2_3c4dIFYFU',
    },
    {
      id: 'post-5',
      image: 'https://images.unsplash.com/photo-1567014543648-e4391c989aab?auto=format&fit=crop&w=1050&q=80',
      title: 'Sleepy Woofs',
      description: 'Sleeping is just as important for woofs as it is for humans. What are the main things your woof dreams about.',
      caretaker: 'Max Singh',
      source: 'https://unsplash.com/photos/2637Pic9xMw',
    },
    {
      id: 'post-6',
      image: 'https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80',
      title: 'Exploring Woofs',
      description: 'Just sitting in one place is boring for most woofs. How do woofs explore the world?',
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/wcO2PWLuQ3U',
    },
  ],
};
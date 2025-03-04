import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface SavedItem {
  id: string;
  title: string;
  author: string;
  institution: string;
  views: number;
  likes: number;
  participants: number;
  score: string;
  icon: string;
}

const ExamCard = ({ item }: { item: SavedItem }) => (
  <TouchableOpacity style={styles.itemContainer}>
    <View style={styles.itemIconContainer}>
      <Image
        style={styles.itemIcon}
        source={require('../../assets/images/imageExamCard.png')}
        resizeMode="cover"
      />
    </View>

    <View style={styles.itemDetailsContainer}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.authorContainer}>
          <Image
            style={styles.avatarImage}
            source={require('../../assets/images/avartar.png')}
            resizeMode="cover"
          />
          <View style={styles.authorInfo}>
            <Text style={styles.itemAuthor} numberOfLines={1}>
              {item.author}
            </Text>
            <Text style={styles.itemInstitution} numberOfLines={1}>
              {item.institution}
            </Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <AntDesign name="eye" size={10} color="#8B8B8B" />
            <Text style={styles.statText}>{item.views}</Text>
          </View>
          <View style={styles.statItem}>
            <AntDesign name="heart" size={10} color="#8B8B8B" />
            <Text style={styles.statText}>{item.likes}</Text>
          </View>
          <View style={styles.statItem}>
            <AntDesign name="team" size={10} color="#8B8B8B" />
            <Text style={styles.statText}>{item.participants}</Text>
          </View>
        </View>
      </View>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreCircleBackground}>
          <View style={styles.scoreCircleOverlay}>
            <Text style={styles.scoreText}>{item.score}</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 16,
    elevation: 2, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 100,
    justifyContent: "center",
    marginLeft: 20,
  },
  itemIconContainer: {
    width: "30%",
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: 'hidden',
  },
  itemIcon: {
    width: '100%',
    height: '100%',
  },
  itemDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },
  itemTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2A3164',
    marginBottom: 8,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  authorInfo: {
    flex: 1,
  },
  itemAuthor: {
    fontSize: 12,
    color: '#555',
  },
  itemInstitution: {
    fontSize: 10,
    color: '#8B8B8B',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "40%",
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 10,
    color: '#8B8B8B',
    marginLeft: 4,
  },
  scoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  scoreText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2A3164',
  },

  scoreCircleBackground: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor:  '#F5C542', // Yellow background
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreCircleOverlay: {
    width: 42,
    height: 42,
    borderRadius: 20,
    backgroundColor: '#E0E0E0', // gray overlay
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ExamCard;
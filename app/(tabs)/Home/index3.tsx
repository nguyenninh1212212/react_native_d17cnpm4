import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo
import ExamCard from '@/components/ui/ExamCard';

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

// Sample data for both tabs
const savedItems: SavedItem[] = [
  {
    id: '1',
    title: 'What is HTML, CSS?',
    author: 'Nguyễn Văn B',
    institution: 'Đại học điện lực',
    views: 1000,
    likes: 1000,
    participants: 1000,
    score: '26/30',
    icon: require('../../../assets/images/imageExamCard.png'),
  },
];

const categoryItems: SavedItem[] = [
  {
    id: '2',
    title: 'JavaScript Basics',
    author: 'Nguyễn Văn A',
    institution: 'Đại học bách khoa',
    views: 1200,
    likes: 850,
    participants: 1500,
    score: '28/30',
    icon: require('../../../assets/images/imageExamCard.png'),
  },
];

const LibraryScreen = () => {
  const [activeTab, setActiveTab] = useState('saved'); // 'saved' or 'categories'
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const renderTabContent = () => {
    const data = activeTab === 'saved' ? savedItems : categoryItems;
    
    return (
      <>
        <View style={styles.filterSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity 
              style={[styles.filterButton, selectedFilter === 'All' && styles.filterButtonActive]} 
              onPress={() => setSelectedFilter('All')}
            >
              <Text style={[styles.filterText, selectedFilter === 'All' && styles.filterTextActive]}>All</Text>
            </TouchableOpacity>
            {/* Add more filter buttons as needed */}
          </ScrollView>
        </View>
        
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm"
            placeholderTextColor="#8b9cb5"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        
        <FlatList
          data={data}
          renderItem={({ item }) => <ExamCard item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Thư viện</Text>
      </View>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'saved' && styles.activeTab]}
          onPress={() => setActiveTab('saved')}
        >
          <Text style={[styles.tabText, activeTab === 'saved' && styles.activeTabText]}>Đề đã lưu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'categories' && styles.activeTab]}
          onPress={() => setActiveTab('categories')}
        >
          <Text style={[styles.tabText, activeTab === 'categories' && styles.activeTabText]}>Mục</Text>
        </TouchableOpacity>
      </View>
      
      {renderTabContent()}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a3164',
    justifyContent: "center",

  },
  header: {
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#3d4480',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#f5c542', // Yellow underline for active tab
  },
  tabText: {
    color: 'white',
    fontWeight: 'bold',

    fontSize: 16,
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#f5c542',
  },
  searchContainer: {
    margin: 16,
    marginBottom: 8,
  },
  searchInput: {
    backgroundColor: '#3d4480',
    borderRadius: 8,
    padding: 10,
    color: 'white',
  },
  filterSection: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#3d4480',
  },
  filterButtonActive: {
    backgroundColor: '#f5c542',
  },
  filterText: {
    color: 'white',
  },
  filterTextActive: {
    color: '#2a3164',
    fontWeight: 'bold',
  },
  listContainer: {
    flexDirection: "column",
    // paddingHorizontal: 16,
    paddingBottom: 16, // Extra padding for bottom navigation
    justifyContent: "space-around",
    alignContent: "center",
marginRight:16,

  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#2a3164',
    borderTopWidth: 1,
    borderTopColor: '#3d4480',
    paddingVertical: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavItem: {
    // Active nav item styling
  },
  navText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  createButton: {
    backgroundColor: '#f5c542',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LibraryScreen;

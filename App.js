import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';

export default function App() {
  const [language, setLanguage] = useState('en');

  const showAlert = (title, message) => {
    Alert.alert(title, message);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {language === 'en' ? 'Sode Matha Vani' : 'ಸೋಡೆ ಮಠ ವಾಣಿ'}
        </Text>
        <TouchableOpacity 
          style={styles.langButton}
          onPress={() => setLanguage(language === 'en' ? 'kn' : 'en')}
        >
          <Text style={styles.langButtonText}>
            {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.contentContainer}>
          <Text style={styles.greeting}>
            {language === 'en' ? 'Welcome!' : 'ಸ್ವಾಗತ!'}
          </Text>
          <Text style={styles.title}>
            {language === 'en' ? 'Sode Matha Vani' : 'ಸೋಡೆ ಮಠ ವಾಣಿ'}
          </Text>
          <Text style={styles.subtitle}>
            {language === 'en' 
              ? 'Your spiritual community app' 
              : 'ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮಿಕ ಸಮುದಾಯ ಅಪ್ಲಿಕೇಶನ್'}
          </Text>
          
          <View style={styles.cardContainer}>
            <TouchableOpacity 
              style={styles.card} 
              onPress={() => showAlert('Services', 'Seva booking and spiritual services')}
            >
              <Text style={styles.cardIcon}>📖</Text>
              <Text style={styles.cardTitle}>
                {language === 'en' ? 'Services' : 'ಸೇವೆಗಳು'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.card} 
              onPress={() => showAlert('Events', 'Upcoming festivals and events')}
            >
              <Text style={styles.cardIcon}>📅</Text>
              <Text style={styles.cardTitle}>
                {language === 'en' ? 'Events' : 'ಕಾರ್ಯಕ್ರಮಗಳು'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.card} 
              onPress={() => showAlert('Gallery', 'Photos and memories')}
            >
              <Text style={styles.cardIcon}>🖼️</Text>
              <Text style={styles.cardTitle}>
                {language === 'en' ? 'Gallery' : 'ಗ್ಯಾಲರಿ'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.card} 
              onPress={() => showAlert('Contact', 'Get in touch with us')}
            >
              <Text style={styles.cardIcon}>📞</Text>
              <Text style={styles.cardTitle}>
                {language === 'en' ? 'Contact' : 'ಸಂಪರ್ಕ'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => showAlert('Home', 'Home page')}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>{language === 'en' ? 'Home' : 'ಮುಖ್ಯ'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => showAlert('Services', 'Services page')}>
          <Text style={styles.navIcon}>📖</Text>
          <Text style={styles.navLabel}>{language === 'en' ? 'Services' : 'ಸೇವೆಗಳು'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => showAlert('About', 'About page')}>
          <Text style={styles.navIcon}>ℹ️</Text>
          <Text style={styles.navLabel}>{language === 'en' ? 'About' : 'ಬಗ್ಗೆ'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => showAlert('Contact', 'Contact page')}>
          <Text style={styles.navIcon}>📞</Text>
          <Text style={styles.navLabel}>{language === 'en' ? 'Contact' : 'ಸಂಪರ್ಕ'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#8B4513',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  langButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  langButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    padding: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navIcon: {
    fontSize: 18,
    marginBottom: 2,
  },
  navLabel: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    fontWeight: '500',
  },
});
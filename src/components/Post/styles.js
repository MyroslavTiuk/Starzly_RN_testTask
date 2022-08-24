import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },

  uiContainer: {
    height: '100%',
    marginTop: 25,
  },

  video: {
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  //  upper container

  upperContainer: {
    marginLeft: 50,
    marginRight: 30,
    marginBottom: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  talentTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },

  //  right container

  rightContainer: {
    height: 330,
    marginBottom: 20,
    marginRight: 20,
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },

  iconContainer: {
    alignItems: 'center',
  },

  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(50, 50, 50, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 30,
    height: 30,
  },

  iconLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
  },

  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },

  //  bottom container

  bottomContainer: {
    margin: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(50, 50, 50, 0.7)',
    borderRadius: 20,
  },

  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#f71e78',
  },

  itemInfo: {
    width: 130,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  itemPrice: {
    marginBottom: 5,
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },

  itemName: {
    marginBottom: 5,
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },

  itemDescription: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
  },

  addButtonContainer: {
    width: 90,
    height: 65,
    borderRadius: 10,
    backgroundColor: '#f71e78',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  //  modal container

  modal: {
    padding: 20,
    backgroundColor: 'white',
  },

  modalCloseButton: {
    marginBottom: 15,
    alignSelf: 'flex-end',
  },

  modalRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  modalTitleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  divider: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },

  modalProductSpec: {
    marginBottom: 10,
    color: 'grey',
    fontSize: 11,
    fontWeight: '700',
  },

  modalProductExclusiveContainer: {
    marginBottom: 10,
    width: 75,
    height: 15,
    borderRadius: 5,
    backgroundColor: '#f71e78',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalProductExclusive: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
  },

  modalProductTitle: {
    marginBottom: 15,
    width: 200,
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
  },

  modalProductPriceOld: {
    marginRight: 10,
    marginBottom: 10,
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    textDecorationLine: 'line-through',
  },

  modalProductPrice: {
    marginRight: 10,
    marginBottom: 10,
    color: '#f71e78',
    fontSize: 20,
    fontWeight: '700',
  },

  modalProfilePicture: {
    marginRight: 10,
    marginBottom: 15,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: 'white',
  },

  modalProfileSpec: {
    marginBottom: 5,
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
  },

  modalProfileName: {
    marginBottom: 5,
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
  },

  modalReviewsContainer: {
    alignItems: 'center',
  },

  modalReviewsIcon: {
    marginRight: 5,
    marginBottom: 5,
    width: 18,
    height: 18,
  },

  modalReviewsRating: {
    marginBottom: 5,
    color: 'black',
    fontSize: 13,
    fontWeight: '700',
  },

  modalReviews: {
    marginBottom: 5,
    color: 'black',
    fontSize: 11,
  },

  modalDescriptionTitle: {
    marginBottom: 10,
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
  },

  modalDescriptionContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  modalDescription: {
    marginRight: 5,
    color: 'grey',
    fontSize: 13,
  },

  modalDescriptionMore: {
    color: 'grey',
    fontSize: 13,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },

  modalAddVideoContainer: {
    marginBottom: 15,
    width: 130,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
  },

  modalAddCartContainer: {
    marginBottom: 15,
    width: 210,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f71e78',
    borderRadius: 8,
  },

  modalAddVideo: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalAddButton: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },

  modalAddIcon: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
});

export default styles;

import { Component } from 'react';
import glamorous from 'glamorous-native';
import store from '../../redux';
import {
    fetchPhotos,
    addPhoto,
    removePhoto,
} from '../../redux/photos/actions';
import photoMap from '../../redux/photos/photos'

const { Image } = glamorous;

const Container = glamorous.view({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
});

const AlbumText = glamorous.text({
    fontSize: 20,
    color: '#2e2e2e',
});

const TitleText = glamorous.text({
    fontSize: 30,
    color: '#3a4d3b',
});

const URLText = glamorous.text({
    fontSize: 10,
    color: '#939fab',
});

const ThumbnailURLText = glamorous.text({
    fontSize: 10,
    color: '#9893ab',
});

const NextButton = glamorous.touchableHighlight({
    padding: 10
});

const ButtonText = glamorous.text({});

export default class Album extends Component {



    state = {
        currentPhoto: null,
        currentIndex: 0,
    }

    storeNext = () => {

        if (this.state.currentIndex === 3) {
            alert('No more photos to add.');
            return;
        }

        const current = photoMap[this.state.currentIndex];

        this.setState({ currentIndex: this.state.currentIndex + 1 });

        store.dispatch(addPhoto(current));
        this.setState({ currentPhoto: current });
        console.log(JSON.stringify(store.getState()));

    }

    render() {

        return (
            <Container>
                <Image
                    height={250}
                    width={250}
                    borderRadius={20}
                    source={{ uri: this.state.currentPhoto?.thumbnailUrl }}
                />
                <AlbumText>{this.state.currentPhoto?.albumid}</AlbumText>
                <TitleText>{this.state.currentPhoto?.title}</TitleText>
                <URLText>{this.state.currentPhoto?.url}</URLText>
                <ThumbnailURLText>{this.state.currentPhoto?.thumbnailUrl}</ThumbnailURLText>
                <NextButton>
                    <ButtonText onPress={() => this.storeNext()}>
                        Add Next
                    </ButtonText>
                </NextButton>

            </Container>
        );
    }
}


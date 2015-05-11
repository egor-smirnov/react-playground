export default {
    initialStateFromMixin() {
        this.state = {
            count: 0
        };
    },
    componentWillMount() {
        console.log('mounting code from mixin');
    },
    increaseCounter() {
        this.setState({
            count: ++this.state.count
        });
    }
};
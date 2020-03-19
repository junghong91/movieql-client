import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/" // movieql server version 을 실행시키고, 그 localhost 를 연결시킴. (서버를 만들어서 하면 서버 가동 없이 실행 가능할듯)
});

export default client;

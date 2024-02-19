const post = {
  createAt: '2024-01-23T00:00:00.000Z',
  author: 'Andressa Tanaka',
  name: 'post-test',
  subtopics: [
    { name: 'Tópico 1', id: 'topic1' },
    { name: 'Tópico 2', id: 'topic2' },
  ],
  tags: ['git', 'css'],
  title: 'Post de teste',
  subtitle:
    'Eu escrevi esse post para testar a página de blog. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat',
  body: (
    <div>
      <h3 id="topic1">Tópico 1</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nisi
        obcaecati quam expedita ipsa qui dolore eum eveniet excepturi, optio
        nemo beatae in deserunt fugit unde distinctio, molestias iusto fuga.
      </p>
      <h3 id="topic2">Tópico 2</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nisi
        obcaecati quam expedita ipsa qui dolore eum eveniet excepturi, optio
        nemo beatae in deserunt fugit unde distinctio, molestias iusto fuga.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nisi
        obcaecati quam expedita ipsa qui dolore eum eveniet excepturi, optio
        nemo beatae in deserunt fugit unde distinctio, molestias iusto fuga.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nisi
        obcaecati quam expedita ipsa qui dolore eum eveniet excepturi, optio
        nemo beatae in deserunt fugit unde distinctio, molestias iusto fuga.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nisi
        obcaecati quam expedita ipsa qui dolore eum eveniet excepturi, optio
        nemo beatae in deserunt fugit unde distinctio, molestias iusto fuga.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nisi
        obcaecati quam expedita ipsa qui dolore eum eveniet excepturi, optio
        nemo beatae in deserunt fugit unde distinctio, molestias iusto fuga.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nisi
        obcaecati quam expedita ipsa qui dolore eum eveniet excepturi, optio
        nemo beatae in deserunt fugit unde distinctio, molestias iusto fuga.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nisi
        obcaecati quam expedita ipsa qui dolore eum eveniet excepturi, optio
        nemo beatae in deserunt fugit unde distinctio, molestias iusto fuga.
      </p>
      <code>console.log('olá')</code>
    </div>
  ),
};

const posts = Array(10).fill(post);

export default posts;

const imagens = [
      {
        src: 'img/bigben.png',
        titulo: 'Big Ben',
        texto: 'O Big Ben é um dos marcos mais famosos do Reino Unido. Localizado no Parlamento, é símbolo da pontualidade britânica e um ícone de Londres.'
      },
      {
        src: 'img/buckingham.png',
        titulo: 'Palácio de Buckingham',
        texto: 'Residência oficial da monarquia britânica, o Palácio de Buckingham impressiona pela arquitetura e cerimônias.'
      },
      {
        src: 'img/tower-bridge.png',
        titulo: 'Tower Bridge',
        texto: 'A Tower Bridge é uma ponte vitoriana icônica sobre o Rio Tâmisa, conhecida por seu estilo único e funcionalidade basculante.'
      },
      {
        src: 'img/london-eye.png',
        titulo: 'London Eye',
        texto: 'A roda-gigante London Eye oferece uma vista espetacular de Londres e é uma das atrações mais visitadas da Europa.'
      },
      {
        src: 'img/windsor.png',
        titulo: 'Castelo de Windsor',
        texto: 'Um dos castelos mais antigos ainda em uso, o Castelo de Windsor combina história medieval com presença real até hoje.'
      },
      {
        src: 'img/stonehenge.png',
        titulo: 'Stonehenge',
        texto: 'Stonehenge é um dos monumentos pré-históricos mais misteriosos do mundo. Suas pedras gigantes atraem turistas e estudiosos.'
      }
    ];

    let indice = 0;

    function atualizar() {
      const imagemAtual = imagens[indice];
      const anterior = imagens[(indice - 1 + imagens.length) % imagens.length];
      const proxima = imagens[(indice + 1) % imagens.length];

      document.getElementById('imagemAtiva').src = imagemAtual.src;
      document.getElementById('tituloImagem').textContent = imagemAtual.titulo;
      document.getElementById('textoImagem').textContent = imagemAtual.texto;

      document.getElementById('imgAnterior').src = anterior.src;
      document.getElementById('imgProxima').src = proxima.src;
    }

    function proximo() {
      indice = (indice + 1) % imagens.length;
      atualizar();
    }

    function anterior() {
      indice = (indice - 1 + imagens.length) % imagens.length;
      atualizar();
    }

    window.onload = atualizar;
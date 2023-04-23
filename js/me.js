// Selecionando todos os itens da lista de projetos
const itensProjeto = document.querySelectorAll('ul li');

// Adicionando o evento de hover em cada item
itensProjeto.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'var(--cor-secundaria)';
    item.style.color = '#fff';
  });
  item.addEventListener('mouseout', () => {
    item.style.backgroundColor = 'transparent';
    item.style.color = 'var(--cor-primaria)';
  });
});

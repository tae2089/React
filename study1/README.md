# html 요소들

## 1. a태그
### 가. download,href, rel, target등으로 구성되어 있다.
- download는 다운로드에 관련된 것이다
- href는 주소에 관련된 내용이다.
- rel은 관계에 대한 것이다.
- target은 주소 이동 시, 자기 자신을 사용할지 새로운 페이지를 생성하는 것인지에 대해 표시해주는 것이다.

``` html
<a> hello
```

## 2.abbr 태그
### 약어를 지정
- 약어에 대한 내용이 궁금할 수도 있기에 title를 사용

``` html
<abbr> hello
```

## 3. b태그
### 문제가 다른 글자의 범위를 설정
- 특별한 으미를 가지지 않음
- 다른 태그가 적합하지 ㅇ낳은 경우 마지막 수단으로 사용
- 기본적으로 글자가 두껍게 Bold 표시됨

``` html
<b> hello
```

## 4. mark 태그
### 사용자의 관심을 끌기 위해 하이라이팅할 때 사용

``` html
<mark> hello </mark>
```
## 5. em 태그
### 단순한 의미 강조를 표시
- 중첩이 가능
- 중첩될수록 강조 의미가 강해짐
- 정보통신보조기기 등에서 구두 강조로 발음됨
- 기본적으로 이탤릭체로 표시됨

``` html
<em> hello</em>
```

## 6.Strong 태그
### 의미의 중요성을 나타내기 위해 사용
- 기본적으로 글자가 두껍게 표시됨
``` html
<strong> hello
```

## 7.i 태그
### em,strong,mark,cite,dfn 등에서 표현할 수 있는 적합한 의미가 아닌 경우 사용 (평범한 글자와 구분 아이콘이나 특수한 기호 같은) 하기 위해

``` html
<i class="fas fa-home"></i>
```
## 8. dfn 태그
### 용어를 정의할 떄 사용
``` html
<dfn>장난감은 물건이다</dfn>
```

## 9. cite 태그
### 창작물에 대한 참조를 설정(책,논문,영화 등의 제목)
- 기본적으로 이탤릭체로 표시됨
``` html
<cite>The Scream</cite> by Edward Munch, Painted in 1893.
```

## 10. q 태그
### 짧은 인용문을 설정
- 긴 인용문을 설정할 경우 blockquote를 사용

## 11. u 태그
### 밑줄이 있는 글자를 설정
- 순수하게 꾸미는 용도의 요소로 사용
- a 와 헷갈릴 수 있는 위치에서 사용하지 않도록 주의
- css를 활용할 수 있을 경우에는 사용을 권장하지 않음

## 12.kbd 태그
### 텍스트 입력 장치(키보드)에서 사용자 입력을 나타내는 텍스트 범위를 설정

``` html
<kbd>Alt</kbd> 
```

## 13. sup, sub
### 위 첨자(sup)와 아래 첨자(sub)를 설정. (Superscripted text, Subscript text)
``` html
X<sup>4</sup> + Y<sup>2</sup>, H<sub>2</sub>O
```

## 14. time 태그
### 날짜나 시간을 나타내기 위한 목적으로 사용
``` html
<time datetime="2018-07-07">July 7</time>
//윈도우 익스플로어에서는 사용 불가능
```
## 15. span 태그
### 본질적으로 아무것도 나타내지 않는 콘텐츠 영억을 설정
``` html
<span>Alt</span> 
```





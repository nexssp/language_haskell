# Haskel - Nexss PROGRAMMER 2.0

To Install Nexss Programmer please go to [Nexss Programmer CLI](https://github.com/nexssp/cli#readme) for more information.

## Examples

```sh
nexss file add my.hs --template=default.hs
nexss my.hs

# upgrade cabal
cabal v2-install Cabal cabal-install

# make cabal.config
cabal v2-exec ghci
cabal v2-exec -- ghc --make src/innn.hs
```

## Links

[Learn a Haskell for Great Good](http://learnyouahaskell.com)
[Haskell Tutorial in One Video](https://www.youtube.com/watch?v=02_H3LjqMr8)
[AESON - JSON for Haskell](http://hackage.haskell.org/package/aeson-1.4.6.0/docs/Data-Aeson.html)

## Haskell Related

### Development

```sh
nexss myfile.hs

OR

-- in terminal ghci -- loads interactive terminal
:l myfile --loads file
:r -- runprogram

:t -- shows info eg:
-- :t print
-- print:: Show a => a -> IO ()
```

### Syntax

```hs
modExample = mod 5 7
modExample2 = 5 `mod` 7 -- the same as above
negativeNumber = 5 + (-4)
-- lists
import Data.List
multilist = 3 : 5 :6 :7: []
isListEmpty = null myList
fistVal = head myList
lastVal = last myList
everythingExceptLast = init myList
take3 = take 3 myList
drop3 = drop 3 myList
inList = 7 `elem` myList
zeroTo20 = [0..20]
evenList = [2,4..20]
letterList = ['A','C'..'Z']
infinPow10 = [10,20..] -- it will be created when is needed (lazy)
many3s = take 10 (repeat 2)
replicate = replicate 10 3
cycleList = take 10 (cycle [1,2,3,4,5])
listTimes3 = [x * 3 | x <- [1..10], x*3 <= 50]
div3And5 = [x | x <- [1..500], x `mod` 3 ==0,x `mod` 5 ==0]
sortedList = sort [1,5,2]
sumList = zipWith (+) [1,2,3] [5,6,7]
bigger = filter (>3) [1,4,5,6]
evensupto200 = takeWhile (<= 42) [2,4..]
mulListLEFT = foldl (*) 1 [2,3,4,5] -- or foldr
pow3list = [3^n | n<- [1..10]]
pow3list = [[x * y | y <-[1..10]] | x <- [1..10]]
-- Tuples
user = ("User Surname", 40)
name = fst user
age = snd user

names = ["user 1", "user 2", "user 3"]
addresses = [ "add 1", "add 2", "add 3"]
zipped = zip names addresses
-- Functions (name cannot start with upperCase letter)
let myfunc x = x * 2
addMe :: Int -> Int -> Int
addMe x y = x + y

check :: Int -> String
check 11 = "oh 11"
check 55 = "oh 55"
check _ "this is like else"

recursiveF :: Int -> Int
recursiveF 0 = 1
recursiveF n = n * recursiveF (n-1)

isOdd :: Int -> Bool
isOdd n
    | n `mod` 2 ==0 = False
    | (n>10) && n(<20) = "tralala"
    | otherwise = True

isEven n = n `mod` 2==0

rating :: Double -> Double -> String
rating a b
    | avg <10 = "AAAA"
    | otherwise "BBBB: " ++ show avg -- show x -- 'show' change everything to string
    where avg = a/b

getListItems :: [Int] -> String
getListItems [] = "Empty List"
getListItems (x:[]) = "Starts with " ++ show x
getListItems (x:y:[]) = " contains " ++ show x ++ " and " ++ show y
getListItems (x:xs) = "1st: " ++ show x ++ " and " ++ show xs

getFirst :: String -> String
getFirst [] = "empty"
getFirst all@(x:xs) = "The first letter in" ++ all ++ show x

mby4 :: [Int] -> [Int]
mby4 [] = []
mby4 (x:xs) = times4 x : mby4 xs

stringsEq ::[Char] -> [Char] -> Bool
stringsEq [] [] = True
stringsEq [x:xs][y:ys] = x == y && stringsEq xs ys
stringsEq _ _ = False

doMult :: (Int -> Int) -> Int
doMult func = func 3
num3times = doMult someFunc

getAddFunc :: Int -> (Int -> Int)
getAddFunc x y = x + y
add3 = getAddFunc 3
-- lambdas
dbl1to10 = map (\x -> x * 2)[1..10]

getClass :: Int -> String
getClass n = case n of
    5 -> "Go to kindergarden"
    _ -> "Go somewere else"

-- data
data Shape = Circle Float Float Float | Rectangle Float Float Float Float
    deriving Show

area :: Shape -> Float
area (Circle _ _ r) = pi * r ^ 2

areaOfCircle = area(Circle 50 50 50)
areaOfRect = area $ Rectangle 10 10 100 100

-- area (Rectangle x y x2 y2) = (abs (x2 - x) ) * (abs (y2 - y)) -- below is the same with $
area (Rectangle x y x2 y2) = (abs $ x2 - x ) * (abs $ y2 - y)
-- . operator
sumValue = putStrLn (show(1+2))
sumValue = putStrLn . show $ 1 + 2

-- Type classes
:t (+)
-- (+) :: Num a=> a->a->a

data Employee = Employee {name::String, position::String,idNum::Int} deriving (Eq,Show)

-- dd

data ShirtSize = S | M | L
instance Eq ShirtSize where
    S == S = True
    M == M = True
    L == L = True
    _ == _ = False

instance Show ShirtSize where
    show S = "Small"
    show M = "Medium"
    show L = "Large"

smallAvail = S `elem` [S,M,L]
theSize = show S

class MyEq a where
    areEqual :: a -> a -> Bool

instance MyEq ShirtSize where
    areEqual S S = True
    areEqual M M = True
    areEqual L L = True


fib = 1 : 1 : [a + b | (a,b) <- zip fib (tail fib)]




```

### Importing modules

```sh
 ghc-pkg list # list of installed modules
 ghc --print-libdir # display lib folder
```

Run `ghci` interactive shell

```hs

-- :show modules
-- :show paths
-- :browse moduleName

--  Source Wikipedia
 import A                           x, y, A.x, A.y
 import A()	                    (nothing)
 import A(x)	                    x, A.x
 import qualified A	            A.x, A.y
 import qualified A()	            (nothing)
 import qualified A(x)	            A.x
 import A hiding ()	            x, y, A.x, A.y
 import A hiding (x)	            y, A.y
 import qualified A hiding ()	    A.x, A.y
 import qualified A hiding (x)	    A.y
 import A as B	                    x, y, B.x, B.y
 import A as B(x)	            x, B.x
 import qualified A as B	    B.x, B.y
```
